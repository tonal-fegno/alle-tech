# About Page Design Specification
## Cevira Template - About Us Page

**Page URL:** https://more-slider-815376.framer.app/about
**Reference Demo:** https://cevira.framer.website/about

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

### Typography
- **Font Family:** Inter
- **H1:** 68px, font-weight 600 (semibold), color Dark Blue
- **H2:** 48px, font-weight 600, color Dark Blue
- **H4:** 32px, font-weight 600, color Dark Blue
- **H6:** 24px, font-weight 600, color Dark Blue
- **Body Text:** 16px, font-weight 400, color Gray
- **Small Text:** 14px, font-weight 400, color Gray

---

## Page Sections (Top to Bottom)

### 1. Header / Navigation
**Section Name:** `Header` / `Large Menu`
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
  - About (active/current)
  - Pricing
  - Contact
  - All Pages (dropdown)

- **CTA Button:** "Buy Template"
  - Background: Primary Blue `rgb(10, 76, 224)`
  - Text: White
  - Border-radius: 8px
  - Padding: 12px 24px

**Mobile Menu:** Hamburger icon (40px x 40px) triggers slide-out menu

---

### 2. Hero/Banner Section
**Section Name:** `Banner Section`
**Background:** BG3 `rgb(246, 246, 246)`
**Layout:** Centered content, flexbox column
**Padding:** 120px 60px 80px (desktop), 80px 24px 60px (mobile)
**Max-width:** 1320px container

#### Content:
- **Overline Text:** "Committed to Healthier Spaces"
  - Font-size: 14px
  - Font-weight: 600
  - Color: Primary Blue `rgb(10, 76, 224)`
  - Letter-spacing: 1px
  - Text-transform: uppercase
  - Margin-bottom: 16px

- **Main Heading:** "About Us"
  - Font-size: 68px (desktop), 56px (tablet), 44px (mobile)
  - Font-weight: 600
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Line-height: 1.2
  - Max-width: 900px
  - Text-align: center

- **Hero Image:**
  - Image URL: `https://framerusercontent.com/images/YicLdfqHipAoteYHnsyRw9BGdhA`
  - Aspect-ratio: ~16:9
  - Border-radius: 16px
  - Margin-top: 60px
  - Max-width: 1200px
  - Box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.08)

---

### 3. About Us Introduction Section
**Section Name:** `About us Section`
**Background:** White `rgb(255, 255, 255)`
**Layout:** 2-column grid (desktop), stacked (mobile)
**Padding:** 120px 60px (desktop), 80px 24px (mobile)
**Max-width:** 1320px container
**Gap:** 60px

#### Left Column:
- **Section Label:** "Who We Are"
  - Font-size: 14px
  - Font-weight: 600
  - Color: Primary Blue `rgb(10, 76, 224)`
  - Letter-spacing: 1px
  - Text-transform: uppercase
  - Margin-bottom: 24px

- **Description:**
  "We are a team of experienced cleaning professionals committed to delivering high-quality results with attention to detail, reliability, and care in every service we provide."
  - Font-size: 18px
  - Font-weight: 400
  - Color: Gray `rgb(76, 80, 91)`
  - Line-height: 1.6
  - Max-width: 560px

#### Right Column - Stats Cards:
**Layout:** 2 cards in row, equal width, gap 24px

**Card 1: Business Growth**
- **Background:** BG1 `rgb(244, 245, 248)`
- **Border-radius:** 16px
- **Padding:** 32px
- **Label:** "BUSINESS GROWTH"
  - Font-size: 12px
  - Font-weight: 600
  - Color: Gray `rgb(76, 80, 91)`
  - Letter-spacing: 1px
- **Number:** "98%"
  - Font-size: 56px
  - Font-weight: 700
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Line-height: 1.1
- **Description:** "Business revenue growth"
  - Font-size: 16px
  - Color: Gray `rgb(76, 80, 91)`

**Card 2: Ongoing Projects**
- **Background:** BG1 `rgb(244, 245, 248)`
- **Border-radius:** 16px
- **Padding:** 32px
- **Label:** "ONGOING PROJECT"
  - Font-size: 12px
  - Font-weight: 600
  - Color: Gray `rgb(76, 80, 91)`
  - Letter-spacing: 1px
- **Number:** "850"
  - Font-size: 56px
  - Font-weight: 700
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Line-height: 1.1
- **Description:** "Gardens Maintained"
  - Font-size: 16px
  - Color: Gray `rgb(76, 80, 91)`

---

### 4. Mission & Vision Section
**Section Name:** `Mission Section` / `Tab Wrapper`
**Background:** BG3 `rgb(246, 246, 246)`
**Layout:** Centered content with tab interface
**Padding:** 120px 60px (desktop), 80px 24px (mobile)
**Max-width:** 1200px container

#### Header:
- **Section Label:** "Mission & Vission"
  - Font-size: 14px
  - Font-weight: 600
  - Color: Primary Blue `rgb(10, 76, 224)`
  - Letter-spacing: 1px
  - Text-transform: uppercase
  - Margin-bottom: 16px
  - Text-align: center

- **Main Heading:** "Our Mission & Vision"
  - Font-size: 48px (desktop), 40px (tablet), 32px (mobile)
  - Font-weight: 600
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Line-height: 1.2
  - Text-align: center
  - Margin-bottom: 16px

- **Description:**
  "Guided by purpose and driven by excellence, we aim to deliver cleaning services that truly make a difference."
  - Font-size: 18px
  - Color: Gray `rgb(76, 80, 91)`
  - Line-height: 1.6
  - Text-align: center
  - Max-width: 800px
  - Margin: 0 auto 40px

#### Tab Navigation:
**Layout:** Flexbox row, centered, gap 16px
**Tabs:** "Our Mission" | "Vision"
- Inactive tab: Border `rgb(178, 182, 194)`, background white
- Active tab: Background Primary Blue `rgb(10, 76, 224)`, text white
- Border-radius: 8px
- Padding: 12px 32px
- Font-size: 16px
- Font-weight: 600

#### Tab Content Panels:

**Mission Tab (Active by default):**
- **Card Background:** White
- **Border-radius:** 20px
- **Padding:** 48px
- **Box-shadow:** 0px 10px 40px rgba(0, 0, 0, 0.06)
- **Max-width:** 900px
- **Icon/Badge:** Circular badge with icon (top-left)
  - Background: BG2 `rgb(241, 245, 251)`
  - Size: 64px x 64px
  - Border-radius: 50%
- **Title:** "Our Mission"
  - Font-size: 32px
  - Font-weight: 600
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Margin: 24px 0 16px
- **Description:**
  "To provide reliable, high-quality cleaning services that create healthier, more comfortable spaces while ensuring a seamless and stress-free experience for every client."
  - Font-size: 18px
  - Color: Gray `rgb(76, 80, 91)`
  - Line-height: 1.7

**Vision Tab:**
- **Same card styling as Mission**
- **Title:** "Our Vision"
- **Description:** (Vision statement content - populate with appropriate text)

**CTA Button:** "Schedule Now"
- Position: Below tabs, centered
- Background: Primary Blue `rgb(10, 76, 224)`
- Text: White
- Border-radius: 8px
- Padding: 16px 40px
- Font-size: 16px
- Font-weight: 600
- Margin-top: 40px

---

### 5. Awards & Recognition Section
**Section Name:** `Awards` / `Award Card`
**Background:** White `rgb(255, 255, 255)`
**Layout:** Centered header + 3-column grid
**Padding:** 120px 60px (desktop), 80px 24px (mobile)
**Max-width:** 1320px container

#### Header:
- **Section Label:** "Recognition"
  - Font-size: 14px
  - Font-weight: 600
  - Color: Primary Blue `rgb(10, 76, 224)`
  - Letter-spacing: 1px
  - Text-transform: uppercase
  - Margin-bottom: 16px
  - Text-align: center

- **Main Heading:** "Awards & Recognition"
  - Font-size: 48px (desktop), 40px (tablet), 32px (mobile)
  - Font-weight: 600
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Margin-bottom: 16px
  - Text-align: center

- **Description:**
  "Our commitment to quality, reliability, and customer satisfaction"
  - Font-size: 18px
  - Color: Gray `rgb(76, 80, 91)`
  - Line-height: 1.6
  - Text-align: center
  - Max-width: 600px
  - Margin: 0 auto 60px

#### Award Cards Grid:
**Layout:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
**Gap:** 24px

**Award Card 1: Service Excellence**
- **Background:** BG1 `rgb(244, 245, 248)`
- **Border-radius:** 16px
- **Padding:** 40px 32px
- **Award Icon/Image:**
  - Image: `https://framerusercontent.com/images/emyH8marqFsJ6TuFzZViLdOztMg`
  - Size: 80px x 80px
  - Margin-bottom: 24px
- **Award Title:** "Service Excellence"
  - Font-size: 24px
  - Font-weight: 600
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Margin-bottom: 8px
- **Award Subtitle:** "Service Index (2025)"
  - Font-size: 16px
  - Color: Gray `rgb(76, 80, 91)`

**Award Card 2: Best in Class**
- **Same styling as Card 1**
- **Award Icon/Image:** `https://framerusercontent.com/images/f6uS1OtdQ6XfYtvwnes1ezqSY`
- **Award Title:** "Best in Class"
- **Award Subtitle:** "Global Service (2024)"

**Award Card 3: Top Rated Cleaning**
- **Same styling as Card 1**
- **Award Icon/Image:** `https://framerusercontent.com/images/6vuo1kX0s6N245DVdvirFAwmo`
- **Award Title:** "Top Rated Cleaning"
- **Award Subtitle:** "Rated Year (2022)"

**Award Card 4: Eco-Friendly Service** (Second row)
- **Same styling**
- **Award Title:** "Eco-Friendly Service"
- **Award Subtitle:** "Clean Excellence"

**Award Card 5: Gold Standard** (Second row)
- **Same styling**
- **Award Title:** "Gold Standard"
- **Award Subtitle:** (Subtitle text)

**Award Card 6:** (Second row - if applicable)
- Additional award card with same pattern

---

### 6. Team Section
**Section Name:** `Teams Section` / `Team`
**Background:** BG3 `rgb(246, 246, 246)`
**Layout:** Centered header + 3-column grid
**Padding:** 120px 60px (desktop), 80px 24px (mobile)
**Max-width:** 1320px container

#### Header:
- **Section Label:** "Team"
  - Font-size: 14px
  - Font-weight: 600
  - Color: Primary Blue `rgb(10, 76, 224)`
  - Letter-spacing: 1px
  - Text-transform: uppercase
  - Margin-bottom: 16px
  - Text-align: center

- **Main Heading:** "Meet Our Professional Team"
  - Font-size: 48px (desktop), 40px (tablet), 32px (mobile)
  - Font-weight: 600
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Margin-bottom: 16px
  - Text-align: center

- **Description:**
  "A dedicated team of trained professionals committed to delivering consistent, high-quality cleaning services with care and attention to detail."
  - Font-size: 18px
  - Color: Gray `rgb(76, 80, 91)`
  - Line-height: 1.6
  - Text-align: center
  - Max-width: 800px
  - Margin: 0 auto 60px

#### Team Member Cards:
**Layout:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
**Gap:** 32px

**Team Member Card Structure (repeated 3 times):**
- **Background:** White
- **Border-radius:** 16px
- **Overflow:** hidden
- **Box-shadow:** 0px 4px 20px rgba(0, 0, 0, 0.06)

**Image Container:**
- **Aspect-ratio:** 1:1 (square)
- **Object-fit:** cover
- **Background:** BG1 `rgb(244, 245, 248)`

**Content Container:**
- **Padding:** 24px
- **Background:** White

**Member 1:**
- **Image:** `https://framerusercontent.com/images/vpbgrsXqJUpUxCOtbvNNuf8bP0`
- **Name:** "Arlene McCoy"
  - Font-size: 24px
  - Font-weight: 600
  - Color: Dark Blue `rgb(0, 21, 69)`
  - Margin-bottom: 4px
- **Role:** (Role title - e.g., "Cleaning Specialist")
  - Font-size: 16px
  - Color: Gray `rgb(76, 80, 91)`

**Member 2:**
- **Image:** `https://framerusercontent.com/images/ALtYw0twYSuNsXhS0UKZSgFRBGA`
- **Name:** "Albert Flores"
- **Role:** (Role title)

**Member 3:**
- **Image:** `https://framerusercontent.com/images/qSPVnovLawAhELGZ6GUNY1qF8Y`
- **Name:** "Brooklyn Simmons"
- **Role:** (Role title)

---

### 7. FAQ Section
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
- **Icon:** Chevron-down (rotates when expanded)
  - Size: 20px
  - Color: Gray `rgb(76, 80, 91)`

**Answer/Content:**
- **Font-size:** 16px
- **Color:** Gray `rgb(76, 80, 91)`
- **Line-height:** 1.6
- **Padding-top:** 16px
- **Display:** none (collapsed), block (expanded)

**FAQ Items:**

**Q1:** "1. What services do you offer?"
**A1:** "We provide a range of cleaning services including residential cleaning, office cleaning, deep cleaning, and specialized services like sofa, carpet, and window cleaning."

**Q2:** "2. How do I book a cleaning service?"
**A2:** (Booking process description)

**Q3:** "3. Do I need to provide cleaning supplies?"
**A3:** (Supplies information)

**Q4:** "4. Are your cleaners trained and insured?"
**A4:** (Training and insurance details)

**Q5:** "5. Can I reschedule or cancel my booking?"
**A5:** (Rescheduling policy)

---

### 8. Footer
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
  - Contact
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
  - Text: "contact@clarion.com"
  - Font-size: 14px
  - Color: rgba(255, 255, 255, 0.7)

  **Phone:**
  - Icon: Phone icon (Primary Blue)
  - Text: "+1 (800) 123-4567"
  - Font-size: 14px
  - Color: rgba(255, 255, 255, 0.7)

  **Addresses:**
  - Icon: Location pin (Primary Blue)
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
  - **Icon Style:**
    - Size: 20px
    - Color: rgba(255, 255, 255, 0.7)
    - Hover: Primary Blue `rgb(10, 76, 224)`
    - Transition: color 0.2s

---

## Responsive Breakpoints

- **Desktop:** 1380px and above (max-container: 1320px)
- **Tablet:** 768px - 1379px
- **Mobile:** Below 768px (390px base)

## Border Radius Standards

- **Small:** 8px (buttons, small cards)
- **Medium:** 12px (accordion items, inputs)
- **Large:** 16px (main cards, images)
- **Extra Large:** 20px (hero sections, feature cards)

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

- **Hover transitions:** 0.2s - 0.3s ease
- **Accordion expand/collapse:** 0.3s ease
- **Scroll animations:** Fade-in-up with 0.6s duration (stagger for lists)

---

## Additional Assets

### Favicon
- Light mode: `https://framerusercontent.com/images/ogcnQ7QNTESq1delLesTe23n3I.svg`
- Dark mode: `https://framerusercontent.com/images/awzvAHiCTgAO9dT2bIyoP1JwPs.svg`

### Apple Touch Icon
- `https://framerusercontent.com/images/lL2BtzhuWyq8Xyu1LwvuOWZbyEY.png`

### OG Image
- `https://framerusercontent.com/images/f6IMceMGiBTeCU0rGt6FacqyOQ.png`

---

**End of About Page Specification**
