# Services Page Design Specification

## Page Overview
The Services page displays a grid of cleaning service offerings with categories and detailed service cards.

URL Pattern: `/services`

---

## Design Tokens

### Colors
- Primary Blue: `rgb(10, 76, 224)` - #0a4ce0
- Dark Blue: `rgb(0, 21, 69)` - #001545
- Gray: `rgb(76, 80, 91)` - #4c505b
- Black: `rgb(0, 11, 34)` - #000b22
- White: `rgb(255, 255, 255)` - #ffffff
- BG1 (Light Gray): `rgb(244, 245, 248)` - #f4f5f8
- BG2 (Light Blue): `rgb(241, 245, 251)` - #f1f5fb
- BG3 (Off White): `rgb(246, 246, 246)` - #f6f6f6
- Border: `rgb(178, 182, 194)` - #b2b6c2

### Typography
- Font Family: Inter
- H1: 68px, 600 weight, -0.01em letter-spacing, 120% line-height
- H2: 48px, 600 weight, -0.01em letter-spacing, 120% line-height
- H4: 32px, 600 weight
- H6: 24px, 600 weight
- Body: 16px, 400 weight, 150% line-height
- Small text: 14px

### Spacing & Layout
- Border radius: 20px (cards), 10px (buttons/inputs)
- Section padding: 120px vertical, 30px horizontal
- Max content width: 1320px
- Card gaps: 20-30px

---

## Page Sections (In Order)

### 1. Header (Sticky Navigation)
**Component:** Global site header
**Background:** White with subtle shadow when scrolled
**Position:** Sticky, z-index: 9, top of viewport
**Padding:** 30px 0
**Max-width:** 1320px centered

**Content:**
- Logo (left): SVG logo image
- Navigation menu (right):
  - Home
  - About
  - Services (current page, underlined in Primary Blue)
  - Pricing
  - Contact

**Mobile:** Hamburger menu

---

### 2. Hero/Banner Section
**Background:** `rgb(246, 246, 246)` - BG3
**Padding:** 200px top, 120px bottom, 30px horizontal
**Layout:** Centered, full-width

**Content:**
- **Subtitle/Badge:** "Cleaning Professionals" (small text, styled badge/pill)
- **Heading (H2):** "Dedicated Experts" (color: Dark Blue)
- **Tagline (paragraph):** "Experience a higher standard of cleanliness with precision, care, and consistent results."
  - Font: 16px, Gray color
  - Max-width: 550px, centered

**Visual Elements:**
- Background decorative gradient/blur overlay (subtle)

---

### 3. Services Grid Section
**Background:** `rgb(246, 246, 246)` - BG3
**Padding:** 0 30px 60px 30px
**Max-width:** 1320px centered

**Layout:** CSS Grid
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 30px between cards

#### Service Card (Repeated)

**Card Container:**
- Background: White `rgb(255, 255, 255)`
- Border-radius: 20px
- Padding: 30px
- Box-shadow: Subtle elevation
- Hover: Slight lift transform
- Aspect ratio maintained

**Card Content Structure:**
1. **Category Badge (top)**
   - Text: Category name (e.g., "Residential Cleaning", "Office Cleaning", "Deep Cleaning")
   - Background: `rgb(241, 245, 251)` - BG2
   - Border-radius: 8px
   - Padding: 8px 16px
   - Font: 14px, Gray color
   - Inline-block width

2. **Service Image**
   - Aspect ratio: ~16:9 or 4:3
   - Border-radius: 12px
   - Object-fit: cover
   - Margin: 20px 0

3. **Service Title (H4)**
   - Font: 32px, 600 weight
   - Color: Dark Blue
   - Margin-bottom: 12px

4. **Service Description (paragraph)**
   - Font: 16px, 150% line-height
   - Color: Gray
   - 2-3 lines of text
   - Margin-bottom: 20px

5. **Link/Button**
   - Text: "Learn More" or arrow icon
   - Color: Primary Blue
   - Text decoration: none
   - Hover: underline or color shift
   - Link to: `/services/{slug}`

**Service Cards Data (from CMS):**

1. **Home Cleaning**
   - Slug: `home-cleaning`
   - Category: "Residential Cleaning"
   - Image: https://framerusercontent.com/images/tzU4kzxt6Im3mVkuR7ll2Fg.png
   - Description: "Keep your home fresh, organized, and spotless with our regular cleaning services daily."

2. **Office Cleaning**
   - Slug: `office-cleaning`
   - Category: "Office Cleaning"
   - Image: https://framerusercontent.com/images/re8cwwnrRcBWlS63TvqlvS01NY.png
   - Description: "Maintain a healthy and productive environment with our comprehensive office sanitization."

3. **Deep Cleaning**
   - Slug: `deep-cleaning`
   - Category: "Deep Cleaning"
   - Image: https://framerusercontent.com/images/OFvWY5UbXnmViBHjYQ7vksRjs.png
   - Description: "Elevate your home's cleanliness with tailored regular and deep cleaning services for every need."

4. **Workplace Cleaning**
   - Slug: `workplace-cleaning`
   - Category: "Workplace Cleaning"
   - Image: https://framerusercontent.com/images/M4KM7Ko28PgoqNDlikZSm4fxsg.png
   - Description: "Keep your space tidy, organized, and immaculate with our regular cleaning services."

5. **Residential Cleaning**
   - Slug: `residential-cleaning`
   - Category: "Residential Cleaning"
   - Image: https://framerusercontent.com/images/14YWN9DIY2I0Yinciw0jpTVai78.png
   - Description: "Ensure your condo is spotless and ready for new occupants with our thorough move-out cleaning."

6. **Intensive Cleaning**
   - Slug: `intensive-cleaning`
   - Category: "Intensive Cleaning"
   - Image: https://framerusercontent.com/images/56ZqtDbQrIjdTAh4EfEp6NzsCS0.png
   - Description: "Make sure your apartment is pristine and ready for new residents with our detailed exit cleaning."

**Note:** Initially show 6 cards. Additional cards may be loaded with "Load More" button if more services exist in CMS.

---

### 4. CTA Section
**Background:** White or light gradient
**Padding:** 80px 30px
**Max-width:** 800px centered
**Text-align:** center

**Content:**
- **Heading (H4):** "Ready to Get Started?"
- **Description (paragraph):** "Contact us today to schedule your cleaning service."
- **Button:** "Request a Service"
  - Background: Primary Blue
  - Color: White
  - Padding: 16px 32px
  - Border-radius: 10px
  - Font: 16px, 600 weight
  - Link: `/contact` or opens contact form

---

### 5. Contact Form Section
**Background:** `rgb(246, 246, 246)` - BG3
**Padding:** 120px 30px
**Max-width:** 1320px centered

**Layout:** Two-column on desktop
- Left: Contact info/text (40%)
- Right: Form container (60%)

**Left Column Content:**
- **Heading (H4):** "Get in Touch"
- **Paragraph:** "Complete the form and we'll confirm your booking soon."
- **Contact Details:**
  - Phone: +1 (800) 123-4567
  - Email: contact@clarion.com
  - Hours: Monday through Saturday: 9 AM to 7 PM. Closed on Sundays.
  - Addresses:
    - 1901 Thornridge Cir. Shiloh, Hawaii 81063
    - 2715 Ash Dr. San Jose, South Dakota 83475

**Right Column - Form:**
- **Form Container:**
  - Background: White
  - Border-radius: 20px
  - Padding: 40px
  - Box-shadow: subtle

- **Inner Form Box:**
  - Background: `rgb(241, 245, 251)` - BG2
  - Border-radius: 20px
  - Padding: 25px
  - Grid layout: 2 columns for first 4 fields

**Form Fields (in order):**

1. **First Name** (required)
   - Label: "First Name"
   - Type: text input
   - Grid: left column
   - Border: 1px solid Border color
   - Border-radius: 10px
   - Padding: 13px 10px
   - Font: 16px Inter
   - Focus: Border changes to Primary Blue
   - Background: White

2. **Last Name** (required)
   - Label: "Last Name"
   - Type: text input
   - Grid: right column
   - Same styling as First Name

3. **Email** (required)
   - Label: "Email"
   - Type: email input
   - Grid: left column
   - Same styling

4. **Phone** (required)
   - Label: "Phone Number"
   - Type: tel input
   - Grid: right column
   - Same styling

5. **Message** (required)
   - Label: "Message"
   - Type: textarea
   - Grid: spans both columns (full width)
   - Min-height: 200px
   - Resize: vertical
   - Same border/padding styling

6. **Submit Button**
   - Text: "Send Message" or "Request Service"
   - Grid: spans both columns
   - Background: Primary Blue
   - Color: White
   - Padding: 16px
   - Border-radius: 10px
   - Font: 16px, 600 weight
   - Hover: Slight darken
   - Cursor: pointer
   - Width: 100%

---

### 6. Footer
**Component:** Global site footer
**Background:** Dark Blue `rgb(0, 21, 69)`
**Color:** White
**Padding:** 60px 30px 30px 30px

**Layout:** Three columns on desktop, stacked on mobile
**Max-width:** 1320px centered

**Column 1: Logo & Description**
- Logo (white version)
- Company tagline/description
- Social media icons

**Column 2: Quick Links**
- Home
- About
- Services
- Pricing
- Contact

**Column 3: Contact Info**
- Phone: +1 (800) 123-4567
- Email: contact@clarion.com
- Address: 1901 Thornridge Cir. Shiloh, Hawaii 81063

**Bottom Bar:**
- Copyright: "© Designed by RedDevs Powered by Framer"
- Links: Privacy Policy, Terms of Service

---

## Service Detail Page Template

URL Pattern: `/services/{slug}`

Example: `/services/home-cleaning`

### Page Structure

#### 1. Hero Section
**Background:** `rgb(246, 246, 246)` - BG3
**Padding:** 200px top, 80px bottom, 30px horizontal
**Layout:** Centered

**Content (from CMS fields):**
- **Number Badge:** Service number (e.g., "01", "02")
  - Display: Inline badge, small font, Primary Blue background
  - Position: Top of content

- **Title (H1):** Service name (CMS: Title field)
  - Example: "Home Cleaning"
  - Font: 68px, 600 weight, Dark Blue color

- **Short Description (paragraph):** Brief service summary (CMS: Short Description field)
  - Example: "Keep your home fresh, organized, and spotless with our regular cleaning services daily."
  - Font: 18px, Gray color
  - Max-width: 700px centered

- **Category Tags:** (CMS: Categories 01-03 fields)
  - Display: Inline pills/badges
  - Background: `rgb(241, 245, 251)` - BG2
  - Border-radius: 20px
  - Padding: 8px 20px
  - Font: 14px
  - Example tags: "Residential Cleaning", "Regular Service", "Deep Clean"
  - Margin: 10px between tags

- **Hero Image:** (CMS: Image field)
  - Width: 100%, max-width 900px
  - Aspect ratio: 16:9
  - Border-radius: 20px
  - Object-fit: cover
  - Margin-top: 40px

#### 2. Content Section 01
**Background:** White
**Padding:** 80px 30px
**Max-width:** 900px centered

**Content (from CMS):**
- **Heading (H4):** Content heading (CMS: Content 01 field - title part)
  - Example: "A Cleaner Home, A Better Living Experience"
  - Font: 32px, 600 weight, Dark Blue

- **Body Text:** Rich text content (CMS: Content 01 field - body part)
  - Multiple paragraphs describing the service
  - Example: "Our home cleaning service is designed to keep your space fresh, organized, and truly comfortable. Whether you need regular upkeep or a one-time deep clean..."
  - Font: 16px, 150% line-height, Gray color

#### 3. What's Included Section
**Background:** `rgb(246, 246, 246)` - BG3
**Padding:** 80px 30px
**Max-width:** 900px centered

**Content:**
- **Heading (H4):** "What's Included"
  - Font: 32px, 600 weight, Dark Blue

- **Features List:** (CMS: could be array or rich text)
  - Checkmark icon (Primary Blue) next to each item
  - Items displayed as bullet list or grid
  - Font: 16px, Gray color
  - Line-height: 180%

  **Example items:**
  - Dusting and wiping all surfaces
  - Vacuuming and mopping floors
  - Kitchen cleaning (countertops, sink, exterior appliances)
  - Bathroom cleaning and full sanitization
  - Trash removal and disposal
  - General tidying and organization

#### 4. Content Section 02 (Optional)
**Background:** White
**Padding:** 80px 30px
**Max-width:** 1200px centered
**Layout:** Two-column (text left, image right) or full-width

**Content (from CMS):**
- **Heading:** (CMS: Content 02 field - title part)
- **Body Text:** (CMS: Content 02 field - body part)
- **Body Image:** (CMS: Body Image field)
  - Border-radius: 20px
  - May be positioned alongside text or full-width

#### 5. CTA Section
(Same as on Services list page)

#### 6. Contact Form Section
(Same as on Services list page)

#### 7. Footer
(Same as on Services list page)

---

## CMS Field Mapping for Service Detail

When rebuilding in Next.js, each service item should have these CMS fields:

- **Number:** (string) Display number/badge (e.g., "01", "02")
- **Title:** (string) Service name for H1
- **Short Description:** (text) Brief description for hero
- **Image:** (image URL) Main hero image
- **Categories 01:** (string/tag) First category tag
- **Categories 02:** (string/tag) Second category tag
- **Categories 03:** (string/tag) Third category tag
- **Content 01:** (rich text) First content section with heading + body
- **Content 02:** (rich text, optional) Second content section with heading + body
- **Body Image:** (image URL, optional) Additional image for content section
- **Slug:** (string) URL slug (e.g., "home-cleaning")

---

## Responsive Breakpoints

- **Desktop:** 1380px and above - 3 columns, full layout
- **Tablet:** 768px to 1379px - 2 columns, adjusted font sizes
- **Mobile:** Below 768px - 1 column, stacked layout, smaller fonts

**Font Size Adjustments:**
- H1: 68px → 56px (tablet) → 42px (mobile)
- H2: 48px → 40px (tablet) → 32px (mobile)
- H4: 32px → 28px (tablet) → 24px (mobile)

---

## Images Referenced

**Services Page:**
- Logo: https://framerusercontent.com/images/ogcnQ7QNTESq1delLesTe23n3I.svg
- Service card images: (see individual service cards above)
- Social icons: Various SVG files
- Decorative elements: Background patterns/gradients

**All image URLs should have query parameters stripped when implementing.**

---

## Interactions & Animations

- Service cards: Hover lift (transform: translateY(-4px))
- Buttons: Hover color darken, subtle scale
- Form inputs: Focus border color change to Primary Blue
- Smooth scrolling for anchor links
- Fade-in on scroll for cards (optional)

---

## Accessibility Notes

- All images have alt text
- Form inputs have associated labels
- Color contrast meets WCAG AA standards
- Focus states visible on all interactive elements
- Semantic HTML structure (header, main, section, footer)
- ARIA labels where appropriate

---

## Technical Notes for Next.js Implementation

1. Use Next.js 14+ App Router
2. Service data should come from CMS (Sanity/Contentful) or local JSON
3. Use `<Image>` component from next/image for all images
4. Implement dynamic routes: `app/services/[slug]/page.tsx`
5. Use CSS Modules or Tailwind CSS for styling
6. Implement server components where possible
7. Add metadata/SEO for each page dynamically
8. Consider implementing ISR (Incremental Static Regeneration) for CMS updates
