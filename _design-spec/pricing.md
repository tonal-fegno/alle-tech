# Pricing Page Design Specification

## Page Overview
The Pricing page displays service plans in a card-based layout with a detailed comparison table showing features across all plans.

URL Pattern: `/pricing`

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
- Card gaps: 30px

---

## Page Sections (In Order)

### 1. Header (Sticky Navigation)
**Component:** Global site header (same as Services page)
**Background:** White with subtle shadow when scrolled
**Position:** Sticky, z-index: 9, top of viewport
**Padding:** 30px 0
**Max-width:** 1320px centered

**Content:**
- Logo (left)
- Navigation menu (right):
  - Home
  - About
  - Services
  - Pricing (current page, underlined in Primary Blue)
  - Contact

**Mobile:** Hamburger menu

---

### 2. Hero/Banner Section
**Background:** `rgb(246, 246, 246)` - BG3
**Padding:** 200px top, 120px bottom, 30px horizontal
**Layout:** Centered, full-width
**Max-width:** 900px for text content

**Content:**
- **Subtitle/Badge:** "Pricing Plan" (small text, styled badge/pill)
  - Background: `rgb(241, 245, 251)` - BG2
  - Border-radius: 20px
  - Padding: 8px 20px
  - Font: 14px, Gray color
  - Display: inline-block

- **Heading (H2):** "Explore The Various Plans And Features For Your."
  - Font: 48px, 600 weight, -0.01em letter-spacing
  - Color: Dark Blue
  - Margin: 20px 0

- **Tagline (paragraph):** "Choose the cleaning plan that fits you best. Enjoy clear pricing with no surprises—just reliable, quality cleaning services."
  - Font: 16px, 150% line-height
  - Color: Gray
  - Max-width: 650px, centered

**Visual Elements:**
- Background decorative gradient/blur overlay (subtle)

---

### 3. Pricing Cards Section
**Background:** `rgb(246, 246, 246)` - BG3
**Padding:** 60px 30px 80px 30px
**Max-width:** 1320px centered

**Layout:** Horizontal flex/grid
- Desktop: 3 cards in a row
- Tablet: May wrap to 2-1 or 3 stacked
- Mobile: Stacked vertically
- Gap: 30px between cards

**Billing Toggle (Optional):**
Note: HTML analysis shows "Per Month" but no visible Monthly/Yearly toggle found.
Implementation may have toggle for Monthly/Annual billing if needed in future.

---

#### Pricing Card Component (Repeated 3 times)

**Card Container:**
- Background: White `rgb(255, 255, 255)`
- Border-radius: 20px
- Padding: 40px 30px
- Box-shadow: Subtle elevation
- Hover: Slight lift transform (optional)
- Equal height across all cards

**Card Content Structure (top to bottom):**

1. **Plan Badge/Label (H6)**
   - Font: 24px, 600 weight
   - Color: Dark Blue
   - Margin-bottom: 8px
   - Examples: "Basic Clean", "Standard Clean", "Business Plan"

2. **Price (H2)**
   - Font: 48px, 600 weight
   - Color: Dark Blue or Primary Blue
   - Format: "$XX"
   - Display: Large, prominent

3. **Billing Period (small text)**
   - Text: "Per Month"
   - Font: 14px, 400 weight
   - Color: Gray
   - Position: Right after or below price

4. **Plan Description (paragraph)**
   - Brief description of plan tier
   - Font: 16px, 150% line-height
   - Color: Gray
   - Margin: 16px 0 24px 0
   - Max 1-2 sentences

5. **Features List**
   - **List heading:** "Features Included" (optional, bold or H6 small)
   - **Feature items:**
     - Checkmark icon (Primary Blue, 16px) OR bullet point
     - Text: 16px, Gray color
     - Line-height: 180%
     - Spacing: 12px between items
     - Layout: Vertical list

6. **CTA Button**
   - Text: "Get Started" or "Choose Plan"
   - Width: 100%
   - Background: Primary Blue
   - Color: White
   - Padding: 16px 24px
   - Border-radius: 10px
   - Font: 16px, 600 weight
   - Hover: Darken background
   - Margin-top: auto (pushes to bottom if card is flex column)

---

### Plan Details (Left to Right)

#### Plan 1: Basic Clean

**Badge/Title (H6):** "Basic Clean"
**Alternative heading:** "Basic"

**Price (H2):** "$49"
**Period:** "Per Month"

**Description:**
"Enhanced cleaning with extra care." (Note: May be generic placeholder)

**Features Included:**
- General dusting & wiping
- Floor cleaning & vacuuming
- Bathroom & kitchen cleaning
- Window and mirror polishing
- Furniture dusting and polishing

**Button:** "Get Started"

**Visual Notes:**
- Standard white card
- No special highlighting

---

#### Plan 2: Standard Clean

**Badge/Title (H6):** "Standard Clean"
**Alternative heading:** "Standard"

**Price (H2):** "$79"
**Period:** "Per Month"

**Description:**
"Enhanced cleaning with extra care."

**Features Included:**
- Everything in Basic Plan
- General dusting & wiping
- Floor cleaning & vacuuming
- Bathroom & kitchen cleaning
- Window and mirror polishing
- Furniture dusting and polishing

**Button:** "Get Started"

**Visual Notes:**
- May have "Most Popular" or "Recommended" badge at top
- Possible subtle border or shadow enhancement
- Could use Primary Blue accent color for badge

---

#### Plan 3: Business Plan

**Badge/Title (H6):** "Business Plan"
**Alternative heading:** "Business"

**Price (H2):** "$99"
**Period:** "Per Month"

**Description:**
"Enhanced cleaning with extra care."

**Features Included:**
- Everything in Basic & Standard Plan
- General dusting & wiping
- Floor cleaning & vacuuming
- Bathroom & kitchen cleaning
- Window and mirror polishing
- Furniture dusting and polishing
- Additional business-specific services (if applicable)

**Button:** "Get Started"

**Visual Notes:**
- Standard white card
- Premium tier positioning

---

### 4. Comparison Table Section
**Background:** White or `rgb(246, 246, 246)` - BG3
**Padding:** 80px 30px 120px 30px
**Max-width:** 1200px centered

**Section Heading:**
- **Heading (H4):** "Service Details" or "Compare Plans"
  - Font: 32px, 600 weight, Dark Blue
  - Margin-bottom: 40px
  - Text-align: center

**Table Structure:**

**Layout:** Responsive table or grid
- Desktop: 4 columns (Feature name + 3 plan columns)
- Mobile: Stacked or horizontally scrollable

**Table Header Row:**
| Feature | Basic | Standard | Business |
|---------|-------|----------|----------|

**Styling:**
- Header row background: `rgb(241, 245, 251)` - BG2
- Header text: 16px, 600 weight, Dark Blue
- Border-radius on corners: 10px (top)
- Padding: 16px cells

**Table Body Rows:**

Each row alternates background (white / very light gray for zebra striping, optional)

**Feature Rows (Left column):**
- Font: 16px, 400 weight, Dark Blue/Black
- Text-align: left
- Padding: 16px

**Plan Columns (Center columns):**
- Display: Checkmark (✓) or Cross (✗) icons
- Checkmark color: Primary Blue or Green
- Cross color: Light Gray or Red
- Icon size: 20px
- Text-align: center
- Padding: 16px

**Example Features (Based on analysis):**

| Feature | Basic | Standard | Business |
|---------|:-----:|:--------:|:--------:|
| General dusting & wiping | ✓ | ✓ | ✓ |
| Floor cleaning & vacuuming | ✓ | ✓ | ✓ |
| Bathroom & kitchen cleaning | ✓ | ✓ | ✓ |
| Window and mirror polishing | ✓ | ✓ | ✓ |
| Furniture dusting and polishing | ✓ | ✓ | ✓ |
| Deep carpet cleaning | ✗ | ✓ | ✓ |
| Appliance interior cleaning | ✗ | ✓ | ✓ |
| Wall washing | ✗ | ✗ | ✓ |
| Post-construction cleanup | ✗ | ✗ | ✓ |
| Priority booking | ✗ | ✗ | ✓ |

**Table Footer (Optional):**
- Additional CTA buttons below each column
- Same "Get Started" buttons as in cards

**Mobile Responsiveness:**
- Table may transform to accordion or card-based layout
- Horizontal scroll with sticky first column
- Or separate comparison cards for each plan

---

### 5. FAQ Section (If Present)
**Background:** `rgb(246, 246, 246)` - BG3
**Padding:** 80px 30px
**Max-width:** 900px centered

**Section Heading:**
- **Heading (H2):** "Frequently Asked Questions"
  - Font: 48px, 600 weight, Dark Blue
  - Text-align: center
  - Margin-bottom: 40px

**FAQ Items:** Accordion pattern
- **Question (H6 or H5):**
  - Font: 18-20px, 600 weight, Dark Blue
  - Cursor: pointer
  - Padding: 20px 0
  - Border-bottom: 1px solid Border color

- **Answer (paragraph):**
  - Font: 16px, 150% line-height, Gray
  - Display: Collapsed by default, expands on click
  - Padding: 16px 0 24px 0
  - Animation: Smooth expand/collapse

**Expand/Collapse Icons:**
- Plus (+) when collapsed
- Minus (−) when expanded
- Color: Primary Blue
- Position: Right side of question

*Note: FAQ section was not found in HTML analysis but is common on pricing pages. Implement if content is available.*

---

### 6. CTA Section
**Background:** White or light gradient
**Padding:** 100px 30px
**Max-width:** 800px centered
**Text-align:** center

**Content:**
- **Heading (H2):** "Ready to Get Started?"
  - Font: 48px, 600 weight, Dark Blue
  - Margin-bottom: 16px

- **Description (paragraph):** "Contact us today to schedule your cleaning service or request a custom quote."
  - Font: 18px, 150% line-height, Gray
  - Margin-bottom: 32px

- **Primary Button:** "Request Service"
  - Background: Primary Blue
  - Color: White
  - Padding: 18px 40px
  - Border-radius: 10px
  - Font: 16px, 600 weight
  - Link: `/contact` or scrolls to contact form

- **Secondary Button (Optional):** "View Services"
  - Background: Transparent
  - Border: 2px solid Primary Blue
  - Color: Primary Blue
  - Padding: 16px 40px
  - Border-radius: 10px
  - Font: 16px, 600 weight
  - Link: `/services`
  - Margin-left: 16px

---

### 7. Contact Form Section
**Background:** `rgb(246, 246, 246)` - BG3
**Padding:** 120px 30px
**Max-width:** 1320px centered

**Layout:** Two-column on desktop
- Left: Contact info/text (40%)
- Right: Form container (60%)

(Same structure as Services page - see services.md for complete details)

**Left Column Content:**
- Heading: "Get in Touch"
- Description: "Complete the form and we'll confirm your booking soon."
- Contact details (phone, email, hours, addresses)

**Right Column - Form:**
- White container with BG2 inner form
- Fields: First Name, Last Name, Email, Phone (2-column grid), Message (full-width textarea)
- Submit button: "Send Message" or "Request Quote"

---

### 8. Footer
**Component:** Global site footer (same as Services page)
**Background:** Dark Blue `rgb(0, 21, 69)`
**Color:** White
**Padding:** 60px 30px 30px 30px

(Same structure as Services page - see services.md for complete details)

**Columns:**
1. Logo & description
2. Quick links
3. Contact info

**Bottom:** Copyright and legal links

---

## Pricing Data Structure for Next.js

When implementing, create a pricing config or CMS structure:

```typescript
interface PricingPlan {
  id: string;
  name: string;           // "Basic Clean", "Standard Clean", "Business Plan"
  alternativeName: string; // "Basic", "Standard", "Business"
  price: number;          // 49, 79, 99
  period: string;         // "Per Month"
  description: string;    // Plan description
  featured: boolean;      // For "Most Popular" badge
  features: string[];     // Array of feature descriptions
  buttonText: string;     // "Get Started"
  buttonLink: string;     // "/contact" or checkout link
}

interface ComparisonFeature {
  name: string;           // Feature name
  basic: boolean;         // Available in Basic
  standard: boolean;      // Available in Standard
  business: boolean;      // Available in Business
  description?: string;   // Optional tooltip text
}
```

---

## Responsive Breakpoints

- **Desktop:** 1380px and above
  - 3-column pricing cards
  - Full comparison table (4 columns)
  - Two-column contact form layout

- **Tablet:** 768px to 1379px
  - 2-1 or 3-column pricing cards (may stack)
  - Comparison table remains 4 columns or switches to horizontal scroll
  - Font sizes slightly reduced
  - Two-column contact form may become single column

- **Mobile:** Below 768px
  - 1-column stacked pricing cards
  - Comparison table transforms to accordion or horizontal scroll
  - Single column contact form
  - Smaller fonts and padding

**Font Size Adjustments:**
- H1: 68px → 56px (tablet) → 42px (mobile)
- H2: 48px → 40px (tablet) → 32px (mobile)
- H4: 32px → 28px (tablet) → 24px (mobile)
- H6: 24px → 20px (tablet) → 18px (mobile)

---

## Images Referenced

- Logo: https://framerusercontent.com/images/ogcnQ7QNTESq1delLesTe23n3I.svg
- Checkmark icons: SVG (inline or icon library)
- Decorative elements: Background patterns/gradients
- Social media icons (footer)

**All image URLs should have query parameters stripped when implementing.**

---

## Interactions & Animations

- **Pricing cards:**
  - Hover: Slight lift (transform: translateY(-4px))
  - Hover: Enhanced shadow
  - Transition: 200ms ease

- **Buttons:**
  - Hover: Background darken (10-15%)
  - Hover: Slight scale (1.02)
  - Active: Slight press effect

- **Comparison table:**
  - Row hover: Background highlight (very subtle)
  - Smooth transitions on expand/collapse (if accordion on mobile)

- **FAQ (if present):**
  - Smooth accordion animation
  - Icon rotation (plus to minus)
  - Max-height transition

- **Form inputs:**
  - Focus: Border color change to Primary Blue
  - Focus: Subtle box-shadow glow
  - Transition: 150ms ease

---

## Accessibility Notes

- Pricing cards maintain semantic hierarchy (h6 for plan name, h2 for price)
- Comparison table uses proper `<table>` structure with `<thead>`, `<tbody>`, scope attributes
- All interactive elements keyboard accessible
- Focus states clearly visible
- ARIA labels for icon-only content (checkmarks/crosses)
- Color contrast meets WCAG AA standards
- Screen reader text for "Most Popular" badge if visually indicated
- Form inputs have associated labels (not just placeholders)
- Skip links for keyboard navigation

---

## Technical Notes for Next.js Implementation

1. **Data Management:**
   - Store pricing plans in config file, CMS, or JSON
   - Comparison table data in separate structure
   - Allow easy updates without code changes

2. **Components to Build:**
   - `PricingCard` component (reusable)
   - `ComparisonTable` component (responsive)
   - `PricingToggle` component (if Monthly/Annual switching needed)
   - `FAQAccordion` component (if FAQ added)

3. **State Management:**
   - Billing period toggle state (if implemented)
   - FAQ accordion open/close state
   - Form validation state

4. **SEO:**
   - Add structured data (JSON-LD) for pricing
   - Meta tags with pricing keywords
   - Dynamic OG images with pricing tiers

5. **Performance:**
   - Lazy load comparison table if large
   - Optimize images with next/image
   - Minimize layout shift with skeleton loaders

6. **Analytics:**
   - Track "Get Started" button clicks per plan
   - Track toggle switches (Monthly/Annual)
   - Monitor form submissions

7. **Future Enhancements:**
   - Add Monthly/Annual billing toggle with price calculations
   - Implement checkout/payment integration
   - Add testimonials section
   - Add "Custom Plan" option for enterprise

---

## Additional Notes

- The pricing structure appears simple with 3 tiers
- Features are cumulative (each tier includes previous tier features)
- No complex pricing calculator or custom quotes on this page (handled via contact form)
- Design prioritizes clarity and simplicity over complex options
- "Business Plan" suggests B2B offering but details minimal - may need expansion for commercial clients
