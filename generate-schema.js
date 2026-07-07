import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();

// Helper to recursively find files
function findFiles(dir, ext, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === 'dist' || file === '.git' || file === 'public') continue;
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, ext, fileList);
    } else if (filePath.endsWith(ext)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const jsxFiles = findFiles(path.join(rootDir, 'src'), '.jsx');
let allJsxContent = '';
for (const file of jsxFiles) {
  allJsxContent += fs.readFileSync(file, 'utf8') + '\n';
}

// 1. Business Name
let businessName = "TMP Architecture Ltd";
const indexHtmlContent = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const titleMatch = indexHtmlContent.match(/<title>(.*?)<\/title>/);
if (titleMatch && titleMatch[1]) {
  businessName = titleMatch[1].split('|')[0].trim();
}

// 2. Phone
const phoneMatch = allJsxContent.match(/href="tel:(.*?)"/);
const phone = phoneMatch ? phoneMatch[1] : "";

// 3. Email
const emailMatch = allJsxContent.match(/href="mailto:(.*?)"/);
const email = emailMatch ? emailMatch[1] : "";

// 4. Address
let streetAddress = "48 Hawthorn Ave";
let addressLocality = "Rainham";
let postalCode = "RM13 9AT";
let addressRegion = "Essex";
const addressRegex = /<div>(\d+.*?[A-Z]{1,2}\d{1,2}\s?\d[A-Z]{2})<\/div>/;
const addressMatch = allJsxContent.match(addressRegex);
if (addressMatch) {
   const fullAddress = addressMatch[1];
   const parts = fullAddress.split(',');
   if (parts.length > 1) {
       streetAddress = parts[0].trim();
       const rest = parts[1].trim();
       const zipMatch = rest.match(/([A-Z]{1,2}\d{1,2}\s?\d[A-Z]{2})/);
       if (zipMatch) {
           postalCode = zipMatch[1];
           addressLocality = rest.replace(postalCode, '').replace(',', '').trim();
       } else {
           addressLocality = rest;
       }
   }
}

// 5. Logo and Images
let logoPath = "/apple-touch-icon.png"; 
const imgMatches = [...allJsxContent.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/g)];
const images = [];
for (const m of imgMatches) {
   if (m[1].includes('avif') || m[1].includes('jpeg') || m[1].includes('jpg') || m[1].includes('png')) {
       images.push(m[1]);
   }
}
const heroImage = images.find(src => src.includes('avif')) || images[0] || "";

// 6. Social Media
const socialLinks = [];
const socialMatch = allJsxContent.match(/href="(https:\/\/(www\.)?(facebook|instagram|linkedin|twitter)\.com\/[^"]+)"/g);
if (socialMatch) {
   socialMatch.forEach(link => {
       const url = link.replace('href="', '').replace('"', '');
       if (!socialLinks.includes(url)) socialLinks.push(url);
   });
}

// 7. Services
const services = [];
// E.g. <h3>Measured Surveys</h3></div><div className="max-width-medium"><p className="text-size-large">Accurate site measurements...</p>
const serviceRegex = /<h3>(.*?)<\/h3>[\s\S]{0,100}?<p className="text-size-large">(.*?)<\/p>/g;
let sMatch;
while ((sMatch = serviceRegex.exec(allJsxContent)) !== null) {
    const name = sMatch[1];
    const desc = sMatch[2];
    services.push({
        "@type": "Service",
        "name": name,
        "description": desc
    });
}

// areaServed
const areaServed = [
  { "@type": "State", "name": "Essex" },
  { "@type": "City", "name": "London" }
];

// Combine into schema
const schema = {
  "@context": "https://schema.org",
  "@type": "Architect",
  "name": businessName,
  "description": "TMP Architecture is an Architectural Practice in Essex delivering personal, professional design services for residential and commercial projects of all scales.",
  "url": "https://tmparchitecture.co.uk", // Placeholder URL
  "logo": "https://tmparchitecture.co.uk" + logoPath,
  "image": heroImage.startsWith('http') ? heroImage : "https://tmparchitecture.co.uk" + heroImage,
  "telephone": phone,
  "email": email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": streetAddress,
    "addressLocality": addressLocality,
    "addressRegion": addressRegion,
    "postalCode": postalCode,
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "FILL_IN_LATITUDE_HERE", 
    "longitude": "FILL_IN_LONGITUDE_HERE"
  },
  "areaServed": areaServed,
  // "foundingDate": "FILL_IN_FOUNDING_DATE_HERE", // Cannot find in codebase
};

if (socialLinks.length > 0) {
  schema.sameAs = socialLinks;
} else {
  schema.sameAs = [
    "FILL_IN_SOCIAL_LINK_1",
    "FILL_IN_SOCIAL_LINK_2"
  ];
}

if (services.length > 0) {
  schema.hasOfferCatalog = {
    "@type": "OfferCatalog",
    "name": "Architectural Services",
    "itemListElement": services.map((s, idx) => ({
      "@type": "Offer",
      "itemOffered": s
    }))
  };
}

let schemaString = JSON.stringify(schema, null, 2);

schemaString = schemaString.replace(
  /"latitude": "FILL_IN_LATITUDE_HERE"/,
  '"latitude": "" /* TODO: Fill in latitude manually */'
);
schemaString = schemaString.replace(
  /"longitude": "FILL_IN_LONGITUDE_HERE"/,
  '"longitude": "" /* TODO: Fill in longitude manually */'
);
schemaString = schemaString.replace(
  /"FILL_IN_SOCIAL_LINK_1"/,
  '"" /* TODO: Fill in social media link 1 manually */'
);
schemaString = schemaString.replace(
  /"FILL_IN_SOCIAL_LINK_2"/,
  '"" /* TODO: Fill in social media link 2 manually */'
);

// We didn't add foundingDate to the object because it wasn't found. Let's insert it manually with a comment.
schemaString = schemaString.replace(
  /"areaServed": \[/,
  '"foundingDate": "", /* TODO: Fill in foundingDate manually (e.g., "2010") */\n  "areaServed": ['
);

// Inject into index.html
let newHtml;
const schemaScriptTag = `<script type="application/ld+json">\n${schemaString}\n</script>`;

if (indexHtmlContent.includes('application/ld+json')) {
  // Replace existing schema
  newHtml = indexHtmlContent.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, schemaScriptTag);
} else {
  // Inject before </head>
  newHtml = indexHtmlContent.replace('</head>', `    ${schemaScriptTag}\n  </head>`);
}

fs.writeFileSync(path.join(rootDir, 'index.html'), newHtml, 'utf8');

console.log('Successfully generated and injected schema.json into index.html');
