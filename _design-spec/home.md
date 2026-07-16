# Cevira Home Page - Complete Design Specification

**Source URL:** https://more-slider-815376.framer.app/
**Date Analyzed:** 2026-07-15
**Purpose:** Rebuild in Next.js

## Design Tokens Reference

### Colors
- **Primary Blue:** `rgb(10, 76, 224)` / `#0A4CE0`
- **Dark Blue:** `rgb(0, 21, 69)` / `#001545`
- **Black:** `rgb(0, 11, 34)` / `#000B22`
- **White:** `#FFFFFF`
- **Gray:** `rgb(76, 80, 91)` / `#4C505B`
- **BG1 (Light Gray):** `rgb(244, 245, 248)` / `#F4F5F8`
- **BG2 (Light Blue):** `rgb(241, 245, 251)` / `#F1F5FB`
- **BG3 (Off-White):** `rgb(246, 246, 246)` / `#F6F6F6`
- **Border:** `rgb(178, 182, 194)` / `#B2B6C2`

### Typography (Inter Font)
- **H1:** 68px, SemiBold (600), line-height 110%, letter-spacing -1%
- **H2:** 48px, SemiBold (600), line-height 120%, letter-spacing -1%
- **H4:** 32px, SemiBold (600), line-height 120%, letter-spacing -1%
- **H6:** 24px, SemiBold (600), line-height 120%, letter-spacing -1%
- **Body:** 18px/20px, Regular (400), line-height 150%
- **Body Large:** 20px, SemiBold (600), line-height 140%
- **Small Text:** 16px, Regular (400), line-height 150%

### Spacing & Layout
- **Container Max Width:** 1320px
- **Section Padding:** 120px vertical, 30px horizontal (desktop)
- **Border Radius:** 8px (cards), 12px (buttons), 100px (badges)
- **Gap:** 10px, 20px, 32px, 60px, 80px (various contexts)

---

## NAVIGATION BAR

**Background:** White
**Height:** ~80px
**Max Width:** 1320px
**Padding:** 20px 30px
**Position:** Fixed top, sticky
**Border Bottom:** 1px solid rgb(178, 182, 194)

### Logo
- **Image:** `https://framerusercontent.com/images/6wKgO3T1OGEYcYcFhewutTgCq8M.svg`
- **Width:** ~150px
- **Height:** 38px
- **Position:** Left side

### Navigation Links (Center/Right)
- Home (link: `./`)
- About (link: `./about`)
- Services (dropdown)
  - Submenu items visible in HTML:
    - Home Cleaning
    - Office Cleaning
    - Deep Cleaning
    - Workplace Cleaning
- Pricing (link: `./pricing`)
- Blogs (link: `./blogs`)
- Contact (link: `./contact`)

**Link Style:**
- Font: Inter, 18px, SemiBold (600)
- Color: Dark Blue (#001545)
- Hover: Underline animation (slides in from left)

### CTA Button (Right)
- **Text:** "Schedule Now"
- **Style:** Primary button
- **Background:** Primary Blue (#0A4CE0)
- **Color:** White
- **Padding:** 16px 30px
- **Border Radius:** 12px
- **Font:** Inter, 18px, SemiBold (600)

---

## 1. HERO SECTION

**Background:** White
**Padding:** 120px 30px
**Layout:** Two-column grid (60% left, 40% right)

### Left Column - Content

#### Badge
- **Text:** "Trusted Cleaning Solutions"
- **Background:** BG2 (rgb(241, 245, 251))
- **Color:** Primary Blue
- **Padding:** 8px 20px
- **Border Radius:** 100px
- **Font:** 16px, SemiBold

#### H1 Heading
- **Text:** "Cleaning Made Simple, Fast & Reliable"
- **Font:** Inter, 68px, SemiBold (600)
- **Color:** Black (#000B22)
- **Line Height:** 110%
- **Letter Spacing:** -1%

#### Subheading Paragraph
- **Text:** "Book expert cleaners in minutes. Transparent pricing, flexible scheduling, and guaranteed results."
- **Font:** 20px, Regular (400)
- **Color:** Gray (#4C505B)
- **Line Height:** 150%
- **Max Width:** 600px

#### CTA Button
- **Text:** "Schedule Now"
- **Background:** Primary Blue (#0A4CE0)
- **Color:** White
- **Padding:** 18px 40px
- **Border Radius:** 12px
- **Font:** 18px, SemiBold (600)
- **Hover:** Slight scale (1.02) or darker blue

#### Trust Badge
- **Text:** "Trusted Rate"
- **Icon:** Star icon (left)
  - **Image:** `https://framerusercontent.com/images/F9ZtzqIecflkeKwl1IvFSdNZM.svg`
- **Rating:** "98.99%"
  - **Font:** H2 style (48px, SemiBold)
  - **Color:** Primary Blue

### Right Column - Hero Card/Image
- **Background:** White with border
- **Border:** 1px solid Border color (#B2B6C2)
- **Border Radius:** 20px
- **Padding:** 40px
- **Image:** Hero illustration/photo
  - Likely: `https://framerusercontent.com/images/136PoxUwkgu3iXX4yVHv0WbbMY.png` or similar
- **Shadow:** Subtle (0 4px 20px rgba(0,0,0,0.08))

---

## 2. BRAND SECTION (Logo Ticker)

**Background:** BG1 (rgb(244, 245, 248))
**Padding:** 40px 30px
**Layout:** Horizontal logo carousel/ticker

### Content
- **Label:** "Trusted 200+ corporate partners!"
  - **Font:** 16px, SemiBold
  - **Color:** Gray (#4C505B)
  - **Center aligned**

### Partner Logos (Scrolling Carousel)
Multiple brand logos in grayscale:
- Logo images (examples):
  - `https://framerusercontent.com/images/0xonJvMMY7zlZXfAGYlkFKd5E.svg`
  - `https://framerusercontent.com/images/3dHA0jhjFElRludhDe1id10lc.svg`
  - `https://framerusercontent.com/images/8xZHpEHBuMwAJDAR8uxbvzOpI.svg`
  - `https://framerusercontent.com/images/Du2y1Y3bbsu6cJYSIDNmrMhZXQ.svg`
  - `https://framerusercontent.com/images/FFKNto6fkLhZrMgaeRhoffWXHU.svg`
  - `https://framerusercontent.com/images/Hz6kcBX6kHgEc6pLyrzvha5IWes.svg`
  - Additional logos present

**Logo Style:**
- Grayscale filter
- Height: ~40px
- Gap: 60px between logos
- Animation: Infinite scroll/marquee

---

## 3. ABOUT US SECTION

**Background:** White
**Padding:** 120px 30px
**Layout:** Centered column

### Badge
- **Text:** "About Us"
- **Style:** Same as hero badge

### H4 Heading
- **Text:** "We're a team of dedicated cleaning professionals committed to delivering spotless results with every visit. Our mission is simple to make your space cleaner, healthier, and more comfortable without adding stress to your day."
- **Font:** Inter, 32px, SemiBold (600)
- **Color:** Black (#000B22)
- **Line Height:** 120%
- **Text Align:** Center
- **Max Width:** 900px

### Stats Cards (3 Columns)

#### Card 1
- **Number:** "1.2k"
  - **Font:** H2 (48px, SemiBold)
  - **Color:** Primary Blue (#0A4CE0)
- **Label:** "Homes & Offices Cleaned"
  - **Font:** 18px, SemiBold
  - **Color:** Dark Blue (#001545)
- **Sublabel:** "Work Completed"
  - **Font:** 16px, Regular
  - **Color:** Gray (#4C505B)

#### Card 2
- **Number:** "850"
  - **Font:** H2 (48px, SemiBold)
  - **Color:** Primary Blue (#0A4CE0)
- **Label:** "Ongoing Projects"
  - **Font:** 18px, SemiBold
  - **Color:** Dark Blue (#001545)
- **Sublabel:** "Items Delivered"
  - **Font:** 16px, Regular
  - **Color:** Gray (#4C505B)

#### Card 3
- **Number:** "3.5k"
  - **Font:** H2 (48px, SemiBold)
  - **Color:** Primary Blue (#0A4CE0)
- **Label:** "Gardens Maintained"
  - **Font:** 18px, SemiBold
  - **Color:** Dark Blue (#001545)
- **Sublabel:** "Total Shipments"
  - **Font:** 16px, Regular
  - **Color:** Gray (#4C505B)

**Card Layout:**
- Display: Grid (3 columns)
- Gap: 40px
- Background: BG3 (#F6F6F6)
- Padding: 40px
- Border Radius: 20px
- Text Align: Center

---

## 4. SERVICE SECTION

**Background:** BG2 (rgb(241, 245, 251))
**Padding:** 120px 30px
**Layout:** Centered

### Section Header

#### Badge
- **Text:** "Our Services"
- **Style:** Same as hero badge

#### H2 Heading
- **Text:** "Best Cleaning Services"
- **Font:** Inter, 48px, SemiBold (600)
- **Color:** Black (#000B22)
- **Line Height:** 120%
- **Text Align:** Center

#### Subheading
- **Text:** "We take pride in delivering consistent, high-quality cleaning services that our clients rely on every day."
- **Font:** 20px, Regular (400)
- **Color:** Gray (#4C505B)
- **Max Width:** 700px
- **Text Align:** Center

### Service Cards (4 Cards - 2x2 Grid on Desktop)

#### Card 1: Home Cleaning
- **Number Badge:** "01"
  - **Font:** H4 (32px, SemiBold)
  - **Color:** Primary Blue (#0A4CE0)
  - **Position:** Top left corner
- **Title:** "Home Cleaning" (H6, 24px, SemiBold)
  - **Color:** Dark Blue (#001545)
- **Description:** "Keep your home fresh, organized, and spotless with our regular cleaning services daily."
  - **Font:** 18px, Regular (400)
  - **Color:** Gray (#4C505B)
  - **Line Height:** 150%
- **Link:** "View Details" → `./services/home-cleaning`
  - **Font:** 18px, SemiBold
  - **Color:** Primary Blue
  - **Icon:** Right arrow
- **Image/Icon:**
  - Likely: `https://framerusercontent.com/images/6Paa4KhXEnAGF8Wm4oBiuJj7Rxw.png`
- **Background:** White
- **Padding:** 40px
- **Border Radius:** 20px
- **Border:** 1px solid Border (#B2B6C2)
- **Hover:** Lift effect (transform: translateY(-8px))

#### Card 2: Office Cleaning
- **Number Badge:** "02"
- **Title:** "Office Cleaning" (H6, 24px, SemiBold)
- **Description:** "Maintain a healthy and productive environment with our comprehensive office sanitization."
- **Link:** "View Details" → `./services/office-cleaning`
- **Image/Icon:** Different service icon
- **Style:** Same as Card 1

#### Card 3: Deep Cleaning
- **Number Badge:** "03"
- **Title:** "Deep Cleaning" (H6, 24px, SemiBold)
- **Description:** "Keep your home fresh, organized, and spotless with our regular and deep cleaning services."
- **Link:** "View Details" → `./services/deep-cleaning`
- **Image/Icon:** Different service icon
- **Style:** Same as Card 1

#### Card 4: Workplace Cleaning
- **Number Badge:** "04"
- **Title:** "Workplace Cleaning" (H6, 24px, SemiBold)
- **Description:** "We deliver reliable, high-quality cleaning services designed to create fresh, comfortable environments for homes and businesses."
- **Link:** "View Details" → `./services/workplace-cleaning`
- **Image/Icon:** Different service icon
- **Style:** Same as Card 1

**Grid Layout:**
- Desktop: 2 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 30px between cards

---

## 5. FEATURES SECTION

**Background:** White
**Padding:** 120px 30px
**Layout:** Left content + Right features grid

### Left Column - Section Header

#### Badge
- **Text:** "Why Choose Us"
- **Style:** Same as hero badge

#### H2 Heading
- **Text:** "Our focus is on creating a clean & healthy environment"
- **Font:** Inter, 48px, SemiBold (600)
- **Color:** Black (#000B22)
- **Max Width:** 500px

### Right Column - Feature Cards (3 Cards)

#### Feature 1: Eco-Safe
- **Icon:**
  - **Image:** `https://framerusercontent.com/images/JTcLqF2HleWItObWBRpylHX1NjY.svg`
  - **Size:** 48px x 48px
  - **Background Circle:** BG2 (light blue), 80px diameter
- **Title:** "Eco-Safe" (H6, 24px, SemiBold)
  - **Color:** Dark Blue (#001545)
- **Description:** "For home and the planet"
  - **Font:** 18px, Regular (400)
  - **Color:** Gray (#4C505B)

#### Feature 2: Expert Team
- **Number:** "50+"
  - **Font:** H2 (48px, SemiBold)
  - **Color:** Primary Blue (#0A4CE0)
- **Title:** "Expert Cleaners" (H6, 24px, SemiBold)
- **Description:** (not visible in extracted text)

#### Feature 3: Clean Spaces
- **Number:** "1.2k"
  - **Font:** H2 (48px, SemiBold)
  - **Color:** Primary Blue (#0A4CE0)
- **Title:** "Clean Spaces Delivered" (H6, 24px, SemiBold)
- **Description:** "Cleaning that fits your schedule"

#### Feature 4: Support
- **Title:** "Fast & Reliable Customer Support" (H6, 24px, SemiBold)
- **Description:** "Our team responds quickly to your inquiries, ensuring you get the help you need without delay."
- **Icon:** Support/chat icon

### Bottom Section - Additional Feature
- **H4 Text:** "Stay consistent with cleaning routine"
  - **Font:** 32px, SemiBold
  - **Color:** Black (#000B22)
- **Background:** BG3 (#F6F6F6)
- **Padding:** 60px
- **Border Radius:** 20px
- **Image:** Feature illustration
  - Example: `https://framerusercontent.com/images/HW6KdkHbVX5BfF7tT601iXYWI2s.png`

---

## 6. WORK SECTION (How It Works)

**Background:** BG2 (rgb(241, 245, 251))
**Padding:** 120px 30px
**Layout:** Centered

### Section Header

#### Badge
- **Text:** "How It Works"
- **Style:** Same as hero badge

#### H2 Heading
- **Text:** "Get Started in 3 Simple Steps"
- **Font:** Inter, 48px, SemiBold (600)
- **Color:** Black (#000B22)
- **Text Align:** Center

#### Subheading
- **Text:** "Booking your cleaning service is quick, easy, and hassle-free. We make cleaning easy so you can focus on what matters most."
- **Font:** 20px, Regular (400)
- **Color:** Gray (#4C505B)
- **Max Width:** 700px
- **Text Align:** Center

### Step Cards (3 Cards - Horizontal Row)

#### Step 1: Choose Your Service
- **Number Badge:** "01"
  - **Font:** H4 (32px, SemiBold)
  - **Color:** Primary Blue (#0A4CE0)
  - **Background Circle:** White, 80px diameter
  - **Border:** 2px solid Primary Blue
- **Title:** "Choose Your Service" (H6, 24px, SemiBold)
  - **Color:** Dark Blue (#001545)
- **Description:** "Browse our range of professional cleaning services and select the one that best suits your needs. Whether it's routine maintenance or a deep clean, we've got you covered."
  - **Font:** 18px, Regular (400)
  - **Color:** Gray (#4C505B)
  - **Line Height:** 150%
- **Icon/Image:**
  - Positioned above or beside card
  - Example: `https://framerusercontent.com/images/IqmnpO3EK4hlwcjBBmDPKlpRoO0.png`

#### Step 2: (Title not fully extracted)
- **Number Badge:** "02"
- **Similar card structure**

#### Step 3: (Title not fully extracted)
- **Number Badge:** "03"
- **Similar card structure**

**Card Style:**
- Background: White
- Padding: 40px
- Border Radius: 20px
- Border: 1px solid Border (#B2B6C2)
- Display: Flex or Grid (3 columns on desktop)
- Gap: 30px

### CTA Button (Bottom)
- **Text:** "Schedule Now"
- **Style:** Primary button (same as hero)

---

## 7. PROVEN SECTION (Before/After Gallery)

**Background:** White
**Padding:** 120px 30px
**Layout:** Centered

### Section Header

#### Badge
- **Text:** "Proven Results"
- **Style:** Same as hero badge

#### H2 Heading
- **Text:** "See the Difference We Make"
- **Font:** Inter, 48px, SemiBold (600)
- **Color:** Black (#000B22)
- **Text Align:** Center

#### Subheading
- **Text:** "Watch your space transform with our professional touch"
- **Font:** 20px, Regular (400)
- **Color:** Gray (#4C505B)
- **Text Align:** Center

### Image Gallery/Slider
- **Layout:** Image slider or comparison slider (before/after)
- **Images:** Multiple before/after cleaning photos
  - Examples:
    - `https://framerusercontent.com/images/6SpPNtvaL0e5EOLPwsQeQZL9718.png`
    - `https://framerusercontent.com/images/BHtyXThekWm38efWvDJkVyqbLVM.png`
    - `https://framerusercontent.com/images/MWlTLm98CBsxZQh3SwlGpbrO8rM.png`
    - `https://framerusercontent.com/images/RPiugULV1heoeVCjDfb9MXnVk.png`
    - `https://framerusercontent.com/images/SmXLUT0oPyMO7Jp8URkswgPRDqo.png`
    - `https://framerusercontent.com/images/T5ZwdF4fAv939hZRY9sN4JOX50.png`
    - `https://framerusercontent.com/images/WuLSFKD8Aj3fmYelKlFPDms7Qo.png`
- **Border Radius:** 20px
- **Shadow:** Subtle
- **Controls:** Dots or arrows for navigation

---

## 8. PRICING SECTION

**Background:** BG2 (rgb(241, 245, 251))
**Padding:** 120px 30px
**Layout:** Centered

### Section Header

#### Badge
- **Text:** "Pricing Plan"
- **Style:** Same as hero badge

#### H2 Heading
- **Text:** "Professional Cleaning, Clearly Priced"
- **Font:** Inter, 48px, SemiBold (600)
- **Color:** Black (#000B22)
- **Text Align:** Center

#### Subheading
- **Text:** "Choose the plan that fits your needs. No hidden fees—just reliable, high-quality cleaning you can trust."
- **Font:** 20px, Regular (400)
- **Color:** Gray (#4C505B)
- **Max Width:** 700px
- **Text Align:** Center

### Pricing Cards (3 Cards - Horizontal Row)

#### Card 1: Basic Clean
- **Title:** "Basic Clean" (H6, 24px, SemiBold)
  - **Color:** Dark Blue (#001545)
- **Price:** "$49"
  - **Font:** H2 (48px, SemiBold)
  - **Color:** Primary Blue (#0A4CE0)
- **Period:** "/ Per Month"
  - **Font:** 16px, Regular
  - **Color:** Gray (#4C505B)
- **Description:** "Enhanced cleaning with extra care."
  - **Font:** 18px, Regular (400)
  - **Color:** Gray (#4C505B)
- **Features List:**
  - **Title:** "Features Included" (16px, SemiBold, Gray)
  - **Items:** (checkmark icon + text)
    - General dusting & wiping
    - Floor cleaning & vacuuming
    - Bathroom & kitchen cleaning
    - Window and mirror polishing
- **CTA Button:**
  - **Text:** "Schedule Now"
  - **Style:** Outlined button (border: 2px solid Primary Blue, color: Primary Blue)
  - **Padding:** 16px 30px
  - **Border Radius:** 12px
- **Background:** White
- **Padding:** 50px 40px
- **Border Radius:** 24px
- **Border:** 1px solid Border (#B2B6C2)

#### Card 2: Standard Clean (Most Popular)
- **Badge:** "Most Popular"
  - **Background:** Primary Blue (#0A4CE0)
  - **Color:** White
  - **Position:** Top right corner
  - **Padding:** 6px 16px
  - **Border Radius:** 100px
- **Title:** "Standard Clean" (H6, 24px, SemiBold)
- **Price:** "$79"
  - **Font:** H2 (48px, SemiBold)
  - **Color:** Primary Blue (#0A4CE0)
- **Period:** "/ Per Month"
- **Description:** "Everything in Basic Plan"
- **Features List:**
  - Everything in Basic Plan
  - Trash removal
  - Window and mirror polishing
  - Furniture dusting and polishing
  - Floor cleaning & vacuuming
  - Bathroom & kitchen cleaning
- **CTA Button:**
  - **Text:** "Schedule Now"
  - **Style:** Filled button (Primary Blue background, White text)
- **Background:** White
- **Border:** 2px solid Primary Blue (highlighted)
- **Shadow:** Stronger (0 8px 30px rgba(10, 76, 224, 0.15))
- **Transform:** Scale slightly larger (1.05) or lifted

#### Card 3: Business Plan
- **Title:** "Business Plan" (H6, 24px, SemiBold)
- **Price:** "$99"
  - **Font:** H2 (48px, SemiBold)
  - **Color:** Primary Blue (#0A4CE0)
- **Period:** "/ Per Month"
- **Description:** "Everything in Basic & Standard Plan"
- **Features List:**
  - Everything in Basic & Standard Plan
  - Floor cleaning & vacuuming
  - General dusting & wiping
  - Bathroom & kitchen cleaning
  - Window and mirror polishing
  - Trash removal
- **CTA Button:**
  - **Text:** "Schedule Now"
  - **Style:** Outlined button
- **Background:** White
- **Style:** Same as Card 1

**Card Layout:**
- Display: Grid (3 columns on desktop)
- Gap: 30px
- Tablet: 2 columns (stack Business Plan below)
- Mobile: 1 column

---

## 9. TESTIMONIAL SECTION

**Background:** White
**Padding:** 120px 30px
**Layout:** Centered

### Section Header

#### Badge
- **Text:** "Testimonial"
- **Style:** Same as hero badge

#### H2 Heading
- **Text:** "Our Reputation, Built on Client Trust"
- **Font:** Inter, 48px, SemiBold (600)
- **Color:** Black (#000B22)
- **Text Align:** Center

### Testimonial Cards (Slider/Carousel)

#### Testimonial Card Structure
- **Quote (H4):** "Fast, reliable, and always spotless. The best cleaning service we've used so far."
  - **Font:** Inter, 32px, SemiBold (600)
  - **Color:** Black (#000B22)
  - **Line Height:** 120%
- **Category Label:** "Cleaning that fits your schedule"
  - **Font:** 16px, Regular
  - **Color:** Gray (#4C505B)
- **Author Section:**
  - **Avatar Image:** Circular photo
    - **Size:** 60px diameter
    - **Example:** `https://framerusercontent.com/images/ReG9tf6xQAp2D3CqssK3eEP0Xk.jpg`
  - **Author Name:** "Cody Fisher"
    - **Font:** 18px, SemiBold (600)
    - **Color:** Dark Blue (#001545)
  - **Designation:** "Manager"
    - **Font:** 16px, Regular (400)
    - **Color:** Gray (#4C505B)
- **Rating:** "4.9"
  - **Font:** H2 (48px, SemiBold)
  - **Color:** Primary Blue (#0A4CE0)
- **Review Count:** "(68 Reviews)"
  - **Font:** 16px, Regular
  - **Color:** Gray (#4C505B)
- **Star Icons:** 5 filled stars
  - **Image:** `https://framerusercontent.com/images/F9ZtzqIecflkeKwl1IvFSdNZM.svg`

**Alternative Quote:**
- "Spotless, stress-free, healthier spaces."

**Another Quote:**
- "We're a team of dedicated cleaning professionals committed to delivering spotless results with every visit. Our mission is to make your space cleaner, healthier, and more comfortable without adding unnecessary stress to your day."

**Card Style:**
- Background: BG3 (#F6F6F6)
- Padding: 60px 50px
- Border Radius: 24px
- Border: None
- Display: Slider (show 1-2 cards at a time)
- Navigation: Dots or arrows

---

## 10. FAQ SECTION

**Background:** BG2 (rgb(241, 245, 251))
**Padding:** 120px 30px
**Layout:** Centered

### Section Header

#### Badge
- **Text:** "FAQ"
- **Style:** Same as hero badge

#### H2 Heading
- **Text:** "Common Questions, Clearly Answered"
- **Font:** Inter, 48px, SemiBold (600)
- **Color:** Black (#000B22)
- **Text Align:** Center

#### Subheading
- **Text:** "Find answers to common questions about our cleaning services, booking process, and what to expect."
- **Font:** 20px, Regular (400)
- **Color:** Gray (#4C505B)
- **Max Width:** 700px
- **Text Align:** Center

### FAQ Accordion Items (6 Questions)

#### FAQ 1
- **Question:** "1. What services do you offer?"
  - **Font:** 20px, SemiBold (600)
  - **Color:** Dark Blue (#001545)
- **Answer:** "We provide a range of cleaning services including residential cleaning, office cleaning, deep cleaning, and specialized services like sofa, carpet, and window cleaning."
  - **Font:** 18px, Regular (400)
  - **Color:** Gray (#4C505B)
  - **Line Height:** 150%
- **Icon:** Plus/Minus toggle
  - **Image:** `https://framerusercontent.com/images/3mP42TSrsuSrDkS1V0VhMqyUpIg.svg` (plus)
  - **Image:** `https://framerusercontent.com/images/XWuihCwPNAZ4UcuMoevImUdLQ.svg` (minus)

#### FAQ 2
- **Question:** "2. How do I book a cleaning service?"
- **Answer:** (Similar service description - reused in HTML)

#### FAQ 3
- **Question:** "3. (Question text not fully extracted)"
- **Answer:** (Not extracted)

#### FAQ 4
- **Question:** "4. Are your cleaners trained and insured?"
- **Answer:** (Not extracted but present)

#### FAQ 5
- **Question:** "5. (Question text not fully extracted)"
- **Answer:** (Not extracted)

#### FAQ 6
- **Question:** "6. (Question text not fully extracted)"
- **Answer:** (Not extracted)

**Accordion Style:**
- Background: White
- Padding: 30px 40px (per item)
- Border Bottom: 1px solid Border (#B2B6C2)
- Border Radius: 0 (except first/last items)
- Gap: 0
- Hover: Background changes to BG3
- Animation: Smooth expand/collapse

**Container:**
- Max Width: 900px
- Background: White
- Border Radius: 20px
- Shadow: Subtle (0 4px 20px rgba(0,0,0,0.06))

---

## 11. CONTACT SECTION

**Background:** White
**Padding:** 120px 30px
**Layout:** Centered form

### Section Header

#### H6 Title
- **Text:** "Request a service"
- **Font:** Inter, 24px, SemiBold (600)
- **Color:** Dark Blue (#001545)
- **Text Align:** Center

#### Subheading
- **Text:** "Complete the form and we'll confirm your booking soon."
- **Font:** 18px, Regular (400)
- **Color:** Gray (#4C505B)
- **Text Align:** Center

### Contact Form

**Form Container:**
- Max Width: 700px
- Background: BG3 (#F6F6F6)
- Padding: 60px 50px
- Border Radius: 24px
- Border: 1px solid Border (#B2B6C2)

#### Form Fields

##### First Name (Input)
- **Label:** "First Name"
- **Type:** Text input
- **Placeholder:** (empty or "First Name")
- **Required:** Yes

##### Last Name (Input)
- **Label:** "Last Name"
- **Type:** Text input
- **Placeholder:** (empty or "Last Name")
- **Required:** Yes

##### Email (Input)
- **Label:** "Email"
- **Type:** Email input
- **Placeholder:** (empty or "Email")
- **Required:** Yes

##### Phone number (Input)
- **Label:** "Phone number"
- **Type:** Tel input
- **Placeholder:** (empty or "Phone number")
- **Required:** Yes

##### Message (Textarea)
- **Label:** "Message"
- **Type:** Textarea
- **Rows:** 5
- **Placeholder:** (empty or "Message")
- **Required:** Yes

**Field Style:**
- Background: White
- Border: 1px solid Border (#B2B6C2)
- Border Radius: 8px
- Padding: 16px 20px
- Font: 16px, Regular
- Color: Dark Blue (#001545)
- Focus: Border color changes to Primary Blue

**Field Layout:**
- First Name + Last Name: 2 columns (side by side)
- Email + Phone: 2 columns (side by side)
- Message: Full width
- Gap: 20px

#### Submit Button
- **Text:** "Send Request"
- **Background:** Primary Blue (#0A4CE0)
- **Color:** White
- **Padding:** 18px 40px
- **Border Radius:** 12px
- **Font:** 18px, SemiBold (600)
- **Width:** Full width or auto
- **Hover:** Darker blue or scale

---

## FOOTER

**Background:** Dark Blue (#001545)
**Color:** White
**Padding:** 80px 30px 30px
**Max Width:** 1320px

### Layout: 4 Columns + Logo Column

#### Column 1: Logo & Contact Info

##### Logo
- **Image:** `https://framerusercontent.com/images/6wKgO3T1OGEYcYcFhewutTgCq8M.svg` (white version)
- **Width:** ~150px
- **Height:** 38px

##### Contact Details (with icons)
- **Address:**
  - **Icon:** Location pin
    - **Image:** `https://framerusercontent.com/images/MbHItcqmseohEG3ZOPcF6iEGZE.svg`
  - **Text:** "2715 Ash Dr. San Jose, South Dakota 83475"
  - **Link:** https://www.google.com/maps
- **Phone:**
  - **Icon:** Phone icon
    - **Image:** `https://framerusercontent.com/images/PDMcsAPPWoWapvX8gTR6F61ykU.svg`
  - **Text:** "+1 (800) 123-4567"
  - **Link:** tel:+1 (800) 123-4567
- **Email:**
  - **Icon:** Email icon
    - **Image:** `https://framerusercontent.com/images/YicLdfqHipAoteYHnsyRw9BGdhA.svg`
  - **Text:** "contact@clarion.com"
  - **Link:** mailto:contact@clarion.com
- **Hours:**
  - **Icon:** Clock icon
    - **Image:** `https://framerusercontent.com/images/Z3orUXUbuHjPxIwqbMCrf8j8PE.svg`
  - **Text:** "Monday through Saturday: 9 AM to 7 PM. Closed on Sundays."

**Contact Text Style:**
- Font: 16px, Regular (400)
- Color: White (opacity 80%)
- Line Height: 150%

#### Column 2: Menus

##### Title
- **Text:** "Menus"
- **Font:** 18px, SemiBold (600)
- **Color:** White

##### Links
- Home (link: `./`)
- About (link: `./about`)
- Services (link: `./services`)
- Pricing (link: `./pricing`)
- Blogs (link: `./blogs`)
- Contact (link: `./contact`)

**Link Style:**
- Font: 16px, Regular (400)
- Color: White (opacity 70%)
- Line Height: 200%
- Hover: Color changes to Primary Blue or opacity 100%

#### Column 3: Services

##### Title
- **Text:** "Services"
- **Font:** 18px, SemiBold (600)
- **Color:** White

##### Links
- Home Cleaning
- Office Cleaning
- Deep Cleaning
- Workplace Cleaning
- (Other services as needed)

**Link Style:** Same as Column 2

#### Column 4: All Pages

##### Title
- **Text:** "All Pages"
- **Font:** 18px, SemiBold (600)
- **Color:** White

##### Links
- Service Details (link: `./services/home-cleaning`)
- Blog Details (link: `./blogs/5-simple-tips-to-keep-your-home-spotless-every-day`)
- 404 (link: `./404`)

**Link Style:** Same as Column 2

### Bottom Bar

**Layout:** Horizontal row (space-between)
**Border Top:** 1px solid rgba(255, 255, 255, 0.15)
**Padding Top:** 30px
**Margin Top:** 60px

#### Left Side - Copyright
- **Text:** "© Designed by RedDevs Powered by Framer"
- **Font:** 16px, Regular (400)
- **Color:** White (opacity 60%)

#### Right Side - Social Icons (4 Icons)

##### Facebook
- **Link:** https://www.facebook.com/
- **Icon:** `https://framerusercontent.com/images/SnBhIfh9jHZK9wvgEeDHgqmFxEA.svg`
- **Size:** 38px x 38px
- **Background:** rgba(255, 255, 255, 0.1)
- **Border Radius:** 50%
- **Padding:** 10px
- **Hover:** Background changes to Primary Blue

##### Instagram
- **Link:** https://www.instagram.com/
- **Icon:** `https://framerusercontent.com/images/SsXzotRP0Wx0ZZxCfXMZeisBs.svg`
- **Style:** Same as Facebook

##### Twitter/X
- **Link:** https://x.com/
- **Icon:** `https://framerusercontent.com/images/VE5zpYjTEnCDbYVQIiCFGosW08.svg`
- **Style:** Same as Facebook

##### LinkedIn
- **Link:** https://www.linkedin.com/
- **Icon:** `https://framerusercontent.com/images/X6WYtTBClXuElRdLrFd9ST24sn8.svg`
- **Style:** Same as Facebook

**Social Icons Layout:**
- Display: Flex
- Gap: 12px

---

## ADDITIONAL IMAGES FOUND

### Icons & Illustrations
- `https://framerusercontent.com/images/56ZqtDbQrIjdTAh4EfEp6NzsCS0.png`
- `https://framerusercontent.com/images/6Paa4KhXEnAGF8Wm4oBiuJj7Rxw.png`
- `https://framerusercontent.com/images/JEhYVzqNZxqI6KiSoG4EyNzZt8.png`
- `https://framerusercontent.com/images/gqebWSRotIfGX3Sfgczg3TSoFA.svg`
- `https://framerusercontent.com/images/kRG9qtNl0sQ5HFGHdAR2TRGeo.svg`
- `https://framerusercontent.com/images/lLkIn1WWWNEcJCGl0CrkA0n4dM.png`
- `https://framerusercontent.com/images/lySJT9PxhdHdNqJYTOJ8P8Ls.svg`
- `https://framerusercontent.com/images/mbyfTDh39FEI41fLTYJRGovuyww.svg`
- `https://framerusercontent.com/images/q3rhsdhC9qmlSasFdtHkMupIeRc.png`
- `https://framerusercontent.com/images/qDeSnySH1gUkQ00OL2elGKk.svg`
- `https://framerusercontent.com/images/rMyXhvdtTblyDFd24uiC3cpoJ9g.svg`
- `https://framerusercontent.com/images/re8cwwnrRcBWlS63TvqlvS01NY.png`
- `https://framerusercontent.com/images/u8GEeaz0uOSSYGhT1jl6HEY2R4.png`
- `https://framerusercontent.com/images/uI5IxtbxoXGcfJCaXFEuZHDCTE.png`
- `https://framerusercontent.com/images/wdpdbLQu1F6oAUX7W0gwIxxako.png`

---

## RESPONSIVE BREAKPOINTS

### Desktop (1380px+)
- Full layout as described
- Container: 1320px max width
- 3-4 column grids

### Tablet (768px - 1379px)
- Container: ~708px max width
- 2 column grids
- Reduced padding: 100px vertical
- Font size adjustments (H1: ~56px, H2: ~42px)

### Mobile (< 768px / 390px)
- Container: Full width with 20px padding
- 1 column layout (stacked)
- Padding: 80px vertical
- Font size adjustments (H1: ~48px, H2: ~36px, H4: ~24px)
- Navigation: Hamburger menu

---

## INTERACTIONS & ANIMATIONS

### Buttons
- Hover: Scale(1.02) or darken background
- Transition: 0.3s ease

### Cards
- Hover: translateY(-8px), increase shadow
- Transition: 0.3s ease

### Links
- Hover: Underline animation (slide from left)
- Color change to Primary Blue

### Accordion (FAQ)
- Expand/Collapse: Smooth height transition (0.3s ease)
- Icon rotation: 180deg

### Logo Ticker
- Infinite horizontal scroll animation
- Speed: ~30s per loop
- Seamless loop

### Image Sliders
- Navigation: Dots or arrows
- Auto-play: Optional (5s interval)
- Transition: Fade or slide (0.5s ease)

---

## FAVICON & METADATA

### Favicon
- **Light Mode:** `https://framerusercontent.com/images/ogcnQ7QNTESq1delLesTe23n3I.svg`
- **Dark Mode:** `https://framerusercontent.com/images/awzvAHiCTgAO9dT2bIyoP1JwPs.svg`
- **Apple Touch Icon:** `https://framerusercontent.com/images/lL2BtzhuWyq8Xyu1LwvuOWZbyEY.png`

### Meta Tags
- **Title:** "Cevira"
- **Description:** "Cevira is a clean and professional Framer template designed for cleaning companies and maintenance services. Showcase your services, build trust, and attract clients with a clear and reliable online presence."
- **OG Image:** `https://framerusercontent.com/images/f6IMceMGiBTeCU0rGt6FacqyOQ.png`

---

## MISSING/UNCLEAR DETAILS

Due to the large HTML size and extraction limitations, some specific details may need verification:

1. **FAQ Questions 3-6:** Full question and answer text not extracted
2. **Work Section Steps 2-3:** Full titles and descriptions not fully extracted
3. **Some service card descriptions:** May have minor text variations
4. **Exact spacing values:** Approximate based on common patterns (120px, 60px, 40px, 30px, 20px)
5. **Hover state colors:** Assumed based on design patterns (darkening or color shifts)
6. **Additional badge/tag texts:** Some small labels may not be captured
7. **Alternative hero images:** The exact hero card image needs verification

**Recommendation:** Review the live site at https://more-slider-815376.framer.app/ for any missing details, especially:
- FAQ questions 3-6 full text
- Exact hover colors
- Work section step 2 & 3 titles
- Any micro-interactions or animations not visible in static HTML

---

## IMPLEMENTATION NOTES FOR NEXT.JS

### Suggested Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (configure design tokens in tailwind.config.js)
- **Fonts:** next/font with Inter from Google Fonts
- **Images:** next/image for optimization
- **Icons:** Custom SVG components or react-icons
- **Animations:** Framer Motion for smooth transitions
- **Carousel/Slider:** Swiper.js or Embla Carousel
- **Form:** React Hook Form + Zod validation
- **Accordion:** Headless UI or Radix UI

### File Structure
```
app/
  ├── page.tsx (Home)
  ├── about/page.tsx
  ├── services/
  │   ├── page.tsx
  │   ├── [slug]/page.tsx
  ├── pricing/page.tsx
  ├── blogs/
  │   ├── page.tsx
  │   ├── [slug]/page.tsx
  ├── contact/page.tsx
  ├── layout.tsx (includes Nav & Footer)
components/
  ├── ui/ (buttons, cards, badges, etc.)
  ├── sections/ (Hero, Services, Features, etc.)
  ├── Nav.tsx
  ├── Footer.tsx
lib/
  ├── constants.ts (design tokens)
public/
  ├── images/ (download & optimize all images)
```

### Design Token Config (Tailwind)
```javascript
colors: {
  primary: '#0A4CE0',
  'dark-blue': '#001545',
  black: '#000B22',
  gray: '#4C505B',
  bg1: '#F4F5F8',
  bg2: '#F1F5FB',
  bg3: '#F6F6F6',
  border: '#B2B6C2',
}
```

---

**End of Design Specification**
