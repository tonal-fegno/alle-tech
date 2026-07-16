# Contact Page Design Specification
## Cevira Template - Contact Us Page

**Page URL:** https://more-slider-815376.framer.app/contact
**Reference Demo:** https://cevira.framer.website/contact

---

## Design Tokens

### Colors
- **Primary Blue:** `rgb(10, 76, 224)` - `#0A4CE0`
- **Dark Blue:** `rgb(0, 21, 69)` - `#001545`
- **Black:** `rgb(0, 11, 34)` - `#000B22`
- **Gray:** `rgb(76, 80, 91)` - `#4C505B`
- **BG1 (Light Gray):** `rgb(244, 245, 248)` - `#F4F5F8`
- **BG2 (Light Blue):** `rgb(241, 245, 251)` - `#F1F5FB`
- **BG3 (Off-White):** `rgb(246, 246, 246)` - `#F6F6F6`
- **Border:** `rgb(178, 182, 194)` - `#B2B6C2`
- **White:** `rgb(255, 255, 255)` - `#FFFFFF`
- **Input Border:** `rgb(178, 182, 194)` - `#B2B6C2`
- **Input Focus:** Primary Blue `rgb(10, 76, 224)`

### Typography
- **Font Family:** Inter
- **H1:** 68px, font-weight 600 (semibold), color Dark Blue
- **H2:** 48px, font-weight 600, color Dark Blue
- **H4:** 32px, font-weight 600, color Dark Blue
- **H6:** 24px, font-weight 600, color Dark Blue
- **Body Text:** 16px, font-weight 400, color Gray
- **Input Text:** 16px, font-weight 400, color Black
- **Label Text:** 14px, font-weight 500, color Dark Blue

---

## Page Sections (Top to Bottom)

### 1. Header / Navigation
**Section Name:** `Header`
**Background:** White `rgb(255, 255, 255)`
**Layout:** Fixed header, full width, flexbox row
**Height:** ~80px
**Padding:** 20px 60px (desktop), 16px 24px (mobile)

#### Content:
- **Logo:** "Cevira" text logo
  - Image: `https://framerusercontent.com/images/ogcnQ7QNTESq1delLesTe23n3I.svg` (light mode)
  - Image: `https://framerusercontent.com/images/awzvAHiCTgAO9dT2bIyoP1JwPs.svg` (dark mode)
  - Size: ~150px width

- **Navigation Links:** (right-aligned)
  - Home
  - About
  - Pricing
  - Contact (active/current)
  - All Pages (dropdown)

- **CTA Button:** "Buy Template"
  - Background: Primary Blue `rgb(10, 76, 224)`
  - Text: White
  - Border-radius: 8px
  - Padding: 12px 24px

**Mobile Menu:** Hamburger icon (40px x 40px) triggers slide-out menu

---

### 2. Hero/Banner Section
**Section Name:** `Banner Section` / `Get in touch`
**Background:** BG3 `rgb(246, 246, 246)`
**Layout:** Centered content, flexbox column
**Padding:** 140px 60px 80px (desktop), 100px 24px 60px (mobile)
**Max-width:** 900px container

#### Content:
- **Main Heading (Split Layout):**
  "Get in touch with us"
  - Font-size: 68px (desktop), 56px (tablet), 44px (mobile)
  - Font-weight: 600
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Line-height: 1.2
  - Text-align: center
  - **"Get" and "touch"** on first lines
  - **"with"** on separate line (styled emphasis)
  - **"us"** continues the flow

- **Description:**
  "Have a question, a project in mind, or just want to learn more? We're here to listen and help you move forward with clarity and care."
  - Font-size: 18px
  - Font-weight: 400
  - Color: Gray `rgb(76, 80, 91)`
  - Line-height: 1.7
  - Text-align: center
  - Max-width: 700px
  - Margin: 24px auto 0

---

### 3. Contact Information Section
**Section Name:** `Call Us Now`
**Background:** White `rgb(255, 255, 255)`
**Layout:** Centered card
**Padding:** 80px 60px (desktop), 60px 24px (mobile)
**Max-width:** 1100px container

#### Contact Card:
- **Background:** BG1 `rgb(244, 245, 248)`
- **Border-radius:** 20px
- **Padding:** 48px 60px (desktop), 32px 24px (mobile)
- **Display:** flexbox row (desktop), column (mobile)
- **Justify-content:** space-between
- **Align-items:** center
- **Gap:** 32px

**Left Side:**
- **Heading:** "Call Us Now"
  - Font-size: 32px
  - Font-weight: 600
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Margin-bottom: 12px

- **Phone Numbers:**
  - **(209) 555-0104,**
  - **(209) 555-0255**
  - Font-size: 20px
  - Font-weight: 500
  - Color: Primary Blue `rgb(10, 76, 224)`
  - Display: inline with comma separator

**Right Side:**
- **Icon/Image:** Phone icon or illustration
  - Image: `https://framerusercontent.com/images/b4xacu7YK9Qi77BMad3SvSbD0DU`
  - Size: ~80px x 80px

---

### 4. Contact Form Section
**Section Name:** `Request a service` / Form Container
**Background:** BG2 `rgb(241, 245, 251)`
**Layout:** 2-column layout (desktop), stacked (mobile)
**Padding:** 100px 60px (desktop), 80px 24px (mobile)
**Max-width:** 1200px container
**Gap:** 80px (desktop), 60px (mobile)

#### Left Column - Form Introduction:
- **Heading:** "Request a service"
  - Font-size: 40px (desktop), 32px (mobile)
  - Font-weight: 600
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Line-height: 1.3
  - Margin-bottom: 16px

- **Description:**
  "Complete the form and we'll confirm your booking soon."
  - Font-size: 18px
  - Color: Gray `rgb(76, 80, 91)`
  - Line-height: 1.6
  - Max-width: 450px

#### Right Column - Contact Form:
**Form Container:**
- **Background:** White
- **Border-radius:** 20px
- **Padding:** 48px (desktop), 32px (mobile)
- **Box-shadow:** 0px 10px 40px rgba(0, 0, 0, 0.06)

**Form Layout:** Vertical stack, gap 24px

**Field 1: First Name**
- **Label:** "First Name"
  - Font-size: 14px
  - Font-weight: 500
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Margin-bottom: 8px
- **Input Type:** text
- **Placeholder:** (none shown, or "Enter your first name")
- **Required:** Yes
- **Input Style:**
  - Border: 1px solid Border `rgb(178, 182, 194)`
  - Border-radius: 8px
  - Padding: 14px 16px
  - Font-size: 16px
  - Background: White
  - Focus: Border Primary Blue `rgb(10, 76, 224)`, box-shadow: 0 0 0 3px rgba(10, 76, 224, 0.1)

**Field 2: Last Name**
- **Label:** "Last Name"
- **Input Type:** text
- **Placeholder:** (none shown, or "Enter your last name")
- **Required:** Yes
- **Same input styling as Field 1**

**Field 3: Email**
- **Label:** "Email"
- **Input Type:** email
- **Placeholder:** (e.g., "your@email.com")
- **Required:** Yes
- **Same input styling**

**Field 4: Phone Number**
- **Label:** "Phone number"
- **Input Type:** tel
- **Placeholder:** (e.g., "+1 (555) 000-0000")
- **Required:** Yes
- **Same input styling**

**Field 5: Message**
- **Label:** "Message"
- **Input Type:** textarea
- **Placeholder:** (e.g., "Tell us about your cleaning needs...")
- **Required:** No
- **Rows:** 5
- **Resize:** vertical
- **Input Style:**
  - Same as text inputs
  - Min-height: 120px

**Submit Button:**
- **Text:** "Send Request"
- **Background:** Primary Blue `rgb(10, 76, 224)`
- **Color:** White
- **Border:** none
- **Border-radius:** 8px
- **Padding:** 16px 32px
- **Font-size:** 16px
- **Font-weight:** 600
- **Width:** 100%
- **Cursor:** pointer
- **Hover:** Background: Darker blue (e.g., `rgb(8, 60, 180)`)
- **Transition:** background-color 0.2s ease
- **Margin-top:** 8px

**Form Validation:**
- Required fields show error state with red border on submit if empty
- Email field validates format
- Phone field accepts various formats
- Error text appears below field in red (#DC2626)

---

### 5. FAQ Section
**Section Name:** `FAQ` / `Desktop FAQ Card`
**Background:** White `rgb(255, 255, 255)`
**Layout:** Centered header + accordion list
**Padding:** 120px 60px (desktop), 80px 24px (mobile)
**Max-width:** 900px container

#### Header:
- **Section Label:** "FAQ"
  - Font-size: 14px
  - Font-weight: 600
  - Color: Primary Blue `rgb(10, 76, 224)`
  - Letter-spacing: 1px
  - Text-transform: uppercase
  - Margin-bottom: 16px
  - Text-align: center

- **Main Heading:** "Common Questions, Clearly Answered"
  - Font-size: 48px (desktop), 40px (tablet), 32px (mobile)
  - Font-weight: 600
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Margin-bottom: 16px
  - Text-align: center

- **Description:**
  "Find answers to common questions about our cleaning services, booking process, and what to expect."
  - Font-size: 18px
  - Color: Gray `rgb(76, 80, 91)`
  - Line-height: 1.6
  - Text-align: center
  - Max-width: 700px
  - Margin: 0 auto 60px

#### FAQ Accordion Items:

**Layout:** Stacked vertically, full-width, gap 16px

**Accordion Item Structure:**
- **Background:** BG1 `rgb(244, 245, 248)`
- **Border-radius:** 12px
- **Padding:** 24px 28px
- **Cursor:** pointer
- **Transition:** all 0.3s ease

**Expanded State:**
- **Background:** White
- **Border:** 1px solid Border `rgb(178, 182, 194)`
- **Box-shadow:** 0px 4px 12px rgba(0, 0, 0, 0.04)

**Question/Header:**
- **Font-size:** 18px
- **Font-weight:** 600
- **Color:** Dark Blue `rgb(0, 21, 69)`
- **Display:** flex, space-between
- **Icon:** Chevron-down (rotates 180deg when expanded)
  - Size: 20px
  - Color: Gray `rgb(76, 80, 91)`
  - Transition: transform 0.3s ease

**Answer/Content:**
- **Font-size:** 16px
- **Color:** Gray `rgb(76, 80, 91)`
- **Line-height:** 1.6
- **Padding-top:** 16px
- **Max-height:** 0 (collapsed)
- **Max-height:** fit-content (expanded)
- **Overflow:** hidden
- **Transition:** max-height 0.3s ease

**FAQ Items:**

**Q1:** "1. What services do you offer?"
**A1:** "We provide a range of cleaning services including residential cleaning, office cleaning, deep cleaning, and specialized services like sofa, carpet, and window cleaning."

**Q2:** "2. How do I book a cleaning service?"
**A2:** "You can book a cleaning service by completing the contact form above, calling us at the phone numbers provided, or sending an email to our contact address. We'll confirm your booking within 24 hours."

**Q3:** "3. Do I need to provide cleaning supplies?"
**A3:** "No, our professional team comes fully equipped with all necessary cleaning supplies and equipment. However, if you have specific products you'd like us to use, we're happy to accommodate your preferences."

**Q4:** "4. Are your cleaners trained and insured?"
**A4:** "Yes, all our cleaning professionals are thoroughly trained, background-checked, and fully insured to ensure your peace of mind and the highest quality of service."

**Q5:** "5. Can I reschedule or cancel my booking?"
**A5:** "Yes, you can reschedule or cancel your booking with at least 24 hours notice. Please contact us by phone or email to make any changes to your appointment."

---

### 6. Footer
**Section Name:** `Footer` / `Footert`
**Background:** Dark Blue `rgb(0, 21, 69)`
**Layout:** Multi-column grid
**Padding:** 80px 60px 40px (desktop), 60px 24px 32px (mobile)

#### Top Section:
**Layout:** 4-column grid (desktop), stacked (mobile)
**Gap:** 60px (desktop), 40px (mobile)

**Column 1: Logo & Hours**
- **Logo:** "Cevira" text logo (white version)
  - Image: `https://framerusercontent.com/images/awzvAHiCTgAO9dT2bIyoP1JwPs.svg`
  - Margin-bottom: 24px

- **Working Hours Card:**
  - **Background:** rgba(255, 255, 255, 0.08)
  - **Border-radius:** 12px
  - **Padding:** 20px 24px
  - **Title:** "Working Hours"
    - Font-size: 16px
    - Font-weight: 600
    - Color: White
    - Margin-bottom: 8px
  - **Hours:** "Monday through Saturday: 9 AM to 7 PM. Closed on Sundays."
    - Font-size: 14px
    - Color: rgba(255, 255, 255, 0.7)
    - Line-height: 1.5

**Column 2: Menus**
- **Heading:** "Menus"
  - Font-size: 18px
  - Font-weight: 600
  - Color: White
  - Margin-bottom: 20px

- **Links:** (Vertical list, gap 12px)
  - Home
  - About
  - Services
  - Service Details
  - Blogs
  - Blog Details
  - Contact (active)
  - 404

  **Link Style:**
  - Font-size: 14px
  - Color: rgba(255, 255, 255, 0.7)
  - Hover: Primary Blue `rgb(10, 76, 224)`
  - Transition: color 0.2s

**Column 3 & 4: Contact Information**
- **Contact Details:** (Stacked vertically, gap 16px)

  **Email:**
  - Icon: Envelope icon (Primary Blue)
    - Image: `https://framerusercontent.com/images/3dHA0jhjFElRludhDe1id10lc`
  - Text: "contact@clarion.com"
  - Font-size: 14px
  - Color: rgba(255, 255, 255, 0.7)
  - Display: flex, align-items: center, gap: 12px

  **Phone:**
  - Icon: Phone icon (Primary Blue)
    - Image: `https://framerusercontent.com/images/MbHItcqmseohEG3ZOPcF6iEGZE`
  - Text: "+1 (800) 123-4567"
  - Font-size: 14px
  - Color: rgba(255, 255, 255, 0.7)

  **Addresses:**
  - Icon: Location pin (Primary Blue)
    - Image: `https://framerusercontent.com/images/XWuihCwPNAZ4UcuMoevImUdLQ`
  - Text: "1901 Thornridge Cir. Shiloh, Hawaii 81063"
  - Text: "2715 Ash Dr. San Jose, South Dakota 83475"
  - Font-size: 14px
  - Color: rgba(255, 255, 255, 0.7)
  - Line-height: 1.6

#### Bottom Section:
**Layout:** Flexbox row, space-between
**Border-top:** 1px solid rgba(255, 255, 255, 0.1)
**Padding-top:** 32px
**Margin-top:** 60px

- **Copyright:** "© Designed by RedDevs Powered by Framer"
  - Font-size: 14px
  - Color: rgba(255, 255, 255, 0.5)

- **Social Icons:** (Right-aligned, flexbox row, gap 16px)
  - Facebook icon
  - Twitter icon
  - Instagram icon
  - LinkedIn icon
  - **Icon Images:**
    - `https://framerusercontent.com/images/F9ZtzqIecflkeKwl1IvFSdNZM`
    - `https://framerusercontent.com/images/Du2y1Y3bbsu6cJYSIDNmrMhZXQ`
    - `https://framerusercontent.com/images/FFKNto6fkLhZrMgaeRhoffWXHU`
    - `https://framerusercontent.com/images/8xZHpEHBuMwAJDAR8uxbvzOpI`
  - **Icon Style:**
    - Size: 20px
    - Color: rgba(255, 255, 255, 0.7)
    - Hover: Primary Blue `rgb(10, 76, 224)`
    - Transition: color 0.2s

---

## Form Behavior & Validation

### Client-Side Validation:
- **Required fields:** First Name, Last Name, Email, Phone
- **Email validation:** RFC 5322 compliant email format
- **Phone validation:** Accepts formats: (XXX) XXX-XXXX, XXX-XXX-XXXX, +X XXX XXX XXXX
- **Error states:** Red border `rgb(220, 38, 38)`, error message below field
- **Success states:** Green border `rgb(34, 197, 94)` after validation

### Form Submission:
- **On Submit:** Button shows loading spinner, text changes to "Sending..."
- **Success:** Form clears, success message appears: "Thank you! We'll contact you soon."
- **Error:** Error message appears: "Something went wrong. Please try again."
- **Message persistence:** 5 seconds, then fades out

---

## Responsive Breakpoints

- **Desktop:** 1380px and above (max-container: 1200px for form section)
- **Tablet:** 768px - 1379px
- **Mobile:** Below 768px (390px base)

## Border Radius Standards

- **Small:** 8px (buttons, inputs)
- **Medium:** 12px (accordion items)
- **Large:** 16px (cards)
- **Extra Large:** 20px (form container, contact cards)

## Spacing Scale

- **xs:** 8px
- **sm:** 16px
- **md:** 24px
- **lg:** 32px
- **xl:** 40px
- **2xl:** 60px
- **3xl:** 80px
- **4xl:** 120px

## Animation Notes

- **Hover transitions:** 0.2s ease
- **Form focus:** 0.15s ease (border color)
- **Accordion expand/collapse:** 0.3s ease
- **Button hover:** 0.2s ease (background-color)
- **Form submission:** Button loading animation (infinite spinner)

---

## Accessibility Notes

### Form Accessibility:
- All inputs have associated `<label>` elements
- Required fields marked with `aria-required="true"`
- Error messages linked with `aria-describedby`
- Focus indicators visible (Primary Blue outline)
- Tab order follows logical flow
- Submit button disabled during submission (`aria-busy="true"`)

### ARIA Labels:
- Form: `aria-label="Contact request form"`
- Phone links: `aria-label="Call us at (209) 555-0104"`
- Email links: `aria-label="Email us at contact@clarion.com"`
- Social icons: Individual `aria-label` for each platform

---

## Additional Assets

### Favicon
- Light mode: `https://framerusercontent.com/images/ogcnQ7QNTESq1delLesTe23n3I.svg`
- Dark mode: `https://framerusercontent.com/images/awzvAHiCTgAO9dT2bIyoP1JwPs.svg`

### Apple Touch Icon
- `https://framerusercontent.com/images/lL2BtzhuWyq8Xyu1LwvuOWZbyEY.png`

### OG Image
- `https://framerusercontent.com/images/f6IMceMGiBTeCU0rGt6FacqyOQ.png`

### Contact Section Images
- Phone illustration: `https://framerusercontent.com/images/b4xacu7YK9Qi77BMad3SvSbD0DU`
- Contact icons: Multiple icon assets (see footer section)

---

**End of Contact Page Specification**
