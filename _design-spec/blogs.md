# Blog Pages Design Specification - Cevira Template

## Overview
This specification covers the blog list page (`/blogs`) and blog detail page template (`/blogs/<slug>`) from the Framer Cevira template.

**Page URLs Analyzed:**
- Blog List: https://more-slider-815376.framer.app/blogs
- Blog Detail Example: https://more-slider-815376.framer.app/blogs/5-simple-tips-to-keep-your-home-spotless-every-day

---

## Design Tokens (Reference)

```css
--primary-blue: rgb(10, 76, 224);
--dark-blue: rgb(0, 21, 69);
--gray: rgb(76, 80, 91);
--black: rgb(0, 11, 34);
--white: rgb(255, 255, 255);
--bg1: rgb(244, 245, 248);
--bg2: rgb(241, 245, 251);
--bg3: rgb(246, 246, 246);
--border: rgb(178, 182, 194);
```

**Typography:**
- Font Family: Inter
- H1: 68px, semibold
- H2: 48px, semibold
- H4: 32px, semibold
- H6: 24px, semibold
- Body: 16px (base), regular (400)

---

# BLOG LIST PAGE (`/blogs`)

## 1. Navigation Header
**Section Name:** Header/Navigation
**Background:** White (rgb(255, 255, 255))
**Layout:**
- Full-width sticky header
- Horizontal flex layout with space-between alignment
- Padding: ~20px 48px
- Border-bottom: 1px solid rgb(178, 182, 194) or subtle shadow

**Content:**
- **Logo:** Cevira logo (SVG) on left
- **Navigation Links:** Center-aligned horizontal list
  - "Home" (link to /)
  - "Pricing" (link to /pricing)
  - "Contact" (link to /contact)
  - "All Pages" (dropdown/link)
  - Font: Inter 16px, regular, color: rgb(0, 11, 34)
- **CTA Button:** "Buy Template"
  - Background: rgb(10, 76, 224)
  - Text: White, Inter 16px semibold
  - Border-radius: 8px
  - Padding: 12px 24px

---

## 2. Hero Section
**Section Name:** Blog Hero / Page Header
**Background:** rgb(244, 245, 248) or rgb(246, 246, 246)
**Layout:**
- Centered content
- Max-width: ~1200px container
- Padding: 80px 48px 60px

**Content:**
- **Section Label (optional):** "Blogs" - small text, uppercase, rgb(76, 80, 91), 14px, letter-spacing 1px
- **Heading (H1):** "Our latest blogs & trends"
  - Font: Inter 68px, semibold
  - Color: rgb(0, 11, 34)
  - Line-height: 1.1
- **Subheading/Description:** "Expert advice, practical tips, and cleaning guides to help you maintain a fresh, healthy, and spotless space."
  - Font: Inter 18px, regular
  - Color: rgb(76, 80, 91)
  - Max-width: ~700px, centered
  - Margin-top: 16px

---

## 3. Blog Grid Section
**Section Name:** Blog Cards Grid
**Background:** White (rgb(255, 255, 255))
**Layout:**
- Max-width container: ~1200px
- Padding: 60px 48px
- Grid layout: 2 columns on desktop (gap 32px), 1 column on mobile
- Each blog card has consistent structure

**Blog Card Design (4 cards visible initially):**

### Card 1: "Tips to Keep Your Home Spotless Every Day"
- **Container:**
  - Background: White
  - Border: 1px solid rgb(178, 182, 194) or subtle box-shadow
  - Border-radius: 12px
  - Overflow: hidden
  - Hover: subtle shadow elevation

- **Image:**
  - Aspect ratio: 16:9 or 3:2
  - Full-width within card
  - Object-fit: cover
  - Placeholder: https://framerusercontent.com/images/[hash].jpg (cleaning/home related)

- **Card Body:**
  - Padding: 24px

- **Meta Information (Top):**
  - Flex row with gap 12px
  - **Date:** "Posted: Jan 17, 2026"
    - Font: Inter 14px, regular
    - Color: rgb(76, 80, 91)
  - **Read Time:** "5 Min Read"
    - Font: Inter 14px, regular
    - Color: rgb(76, 80, 91)
    - Before text: clock icon (optional)

- **Category Badge:**
  - "Cleaning" or "Wellness" or "Housekeeping"
  - Background: rgb(241, 245, 251)
  - Color: rgb(10, 76, 224)
  - Font: Inter 14px, semibold
  - Padding: 6px 12px
  - Border-radius: 6px
  - Margin-top: 12px

- **Title (H6):**
  - "Tips to Keep Your Home Spotless Every Day"
  - Font: Inter 24px, semibold
  - Color: rgb(0, 11, 34)
  - Line-height: 1.3
  - Margin-top: 16px
  - Max-lines: 2 (with ellipsis)

- **Description:**
  - "Discover easy, time-saving habits that help maintain a clean and organized home without extra effort."
  - Font: Inter 16px, regular
  - Color: rgb(76, 80, 91)
  - Line-height: 1.6
  - Margin-top: 12px
  - Max-lines: 3 (with ellipsis)

- **CTA Link:**
  - "Read More"
  - Font: Inter 16px, semibold
  - Color: rgb(10, 76, 224)
  - Margin-top: 16px
  - Arrow icon: →
  - Hover: underline

### Card 2: "How to Grow a Thriving Indoor Herb Garden"
- Same structure as Card 1
- **Date:** "Posted: Jan 21, 2026"
- **Read Time:** "8 Min Read"
- **Category:** "Wellness"
- **Title:** "How to Grow a Thriving Indoor Herb Garden"
- **Description:** "Learn the essentials of indoor herb gardening to enjoy fresh flavors year-round with minimal space and care."

### Card 3: "Morning Rituals That Boost Productivity and Mood"
- Same structure as Card 1
- **Date:** "Posted: Feb 14, 2026"
- **Read Time:** "6 Min Read"
- **Category:** "Wellness"
- **Title:** "Morning Rituals That Boost Productivity and Mood"
- **Description:** "Incorporate these scientifically-backed morning habits to start your day energized and focused."

### Card 4: "5 Easy Ways to Keep Your Home Clean Daily"
- Same structure as Card 1
- **Date:** "Posted: Dec 10, 2026"
- **Read Time:** "5 Min Read"
- **Category:** "Housekeeping"
- **Title:** "5 Easy Ways to Keep Your Home Clean Daily"
- **Description:** "Try simple, quick habits that keep your home tidy and organized effortlessly."

**Load More Button:**
- Below grid, centered
- Text: "Load More"
- Background: Transparent or White
- Border: 2px solid rgb(10, 76, 224)
- Color: rgb(10, 76, 224)
- Font: Inter 16px, semibold
- Padding: 14px 32px
- Border-radius: 8px
- Hover: Background rgb(10, 76, 224), Text White

---

## 4. Contact Form Section (CTA)
**Section Name:** Request a Service / Newsletter CTA
**Background:** rgb(241, 245, 251) or rgb(244, 245, 248)
**Layout:**
- Full-width section
- Max-width container: ~800px
- Padding: 80px 48px
- Centered text alignment

**Content:**
- **Heading (H6):** "Request a service"
  - Font: Inter 24px, semibold
  - Color: rgb(0, 11, 34)
- **Subheading:** "Complete the form and we'll confirm your booking soon."
  - Font: Inter 16px, regular
  - Color: rgb(76, 80, 91)
  - Margin-top: 12px

**Form Fields (2-column grid on desktop):**
- **First Name** (input, required)
- **Last Name** (input, required)
- **Email** (input, required)
- **Phone number** (input)
- **Message** (textarea, full-width, spans 2 columns)

**Field Styling:**
- Background: White
- Border: 1px solid rgb(178, 182, 194)
- Border-radius: 8px
- Padding: 14px 16px
- Font: Inter 16px
- Focus: Border rgb(10, 76, 224)

**Submit Button:**
- Text: "Send Request"
- Background: rgb(10, 76, 224)
- Color: White
- Font: Inter 16px, semibold
- Padding: 16px 32px
- Border-radius: 8px
- Margin-top: 24px
- Hover: Darker blue

---

## 5. Footer
**Section Name:** Footer
**Background:** rgb(0, 11, 34) or rgb(0, 21, 69)
**Layout:**
- Full-width
- Max-width container: ~1200px
- Padding: 60px 48px 40px
- Multi-column grid (4 columns on desktop, 2 on tablet, 1 on mobile)

**Column 1: Working Hours**
- **Heading:** "Working Hours" (White, Inter 18px, semibold)
- **Text:** "Monday through Saturday: 9 AM to 7 PM. Closed on Sundays."
  - Color: rgb(178, 182, 194)
  - Font: Inter 16px, regular

**Column 2: Menus**
- **Heading:** "Menus" (White, Inter 18px, semibold)
- **Links:** (vertical list, gap 12px)
  - "About" → /about
  - "Services" → /services
  - "Service Details" → /services/[slug]
  - "Blogs" → /blogs
  - "Blog Details" → /blogs/[slug]
  - "404"
  - Color: rgb(178, 182, 194)
  - Font: Inter 16px, regular
  - Hover: White

**Column 3: Contact (Email)**
- **Email:** "contact@clarion.com"
  - Color: rgb(178, 182, 194)
  - Font: Inter 16px
  - Link: mailto:

**Column 4: Contact (Phone & Address)**
- **Phone:** "+1 (800) 123-4567"
- **Addresses:**
  - "1901 Thornridge Cir. Shiloh, Hawaii 81063"
  - "2715 Ash Dr. San Jose, South Dakota 83475"
  - Color: rgb(178, 182, 194)
  - Font: Inter 16px, regular

**Copyright Bar:**
- Border-top: 1px solid rgba(255, 255, 255, 0.13)
- Padding-top: 24px
- Margin-top: 40px
- Text: "© Designed by RedDevs Powered by Framer"
  - Color: rgb(178, 182, 194)
  - Font: Inter 14px
  - Centered or left-aligned

---

# BLOG DETAIL PAGE (`/blogs/<slug>`)

## Example Blog Post Data Structure (CMS Fields)

Based on search index, the blog detail page uses these CMS fields:
- **Title** (String) - e.g., "Tips to Keep Your Home Spotless Every Day"
- **Short Description** (Text) - e.g., "Discover easy, time-saving habits..."
- **Category** (String) - e.g., "Cleaning", "Wellness", "Housekeeping"
- **Date** (Date) - e.g., "Jan 17, 2026"
- **Read Time** (String) - e.g., "5 Min Read"
- **Banner Image** (Image URL) - Hero/featured image
- **Content 01** (Rich Text) - First content block
- **Body Image 01** (Image URL) - First inline image
- **Body Image 02** (Image URL) - Second inline image
- **Content 02** (Rich Text) - Second content block

---

## 1. Navigation Header
**Same as Blog List Page** (shared component)

---

## 2. Blog Hero Section
**Section Name:** Blog Hero / Featured Image
**Background:** Full-width image banner
**Layout:**
- Full-width section
- Image: Aspect ratio 16:9 or 21:9 (wide banner)
- Object-fit: cover
- Height: ~500-600px on desktop
- Overlay: Optional dark gradient for text readability

**Content (overlaid on image, or below):**
- **Breadcrumb Navigation:**
  - "Home / Blogs / [Blog Title]"
  - Font: Inter 14px, color: rgb(76, 80, 91) or White (if overlay)
  - Links underline on hover

---

## 3. Blog Header Info Section
**Section Name:** Blog Header Metadata
**Background:** White (rgb(255, 255, 255))
**Layout:**
- Max-width: ~800px container
- Padding: 48px 48px 32px
- Centered content

**Content:**
- **Category Badge:**
  - e.g., "Cleaning"
  - Background: rgb(241, 245, 251)
  - Color: rgb(10, 76, 224)
  - Font: Inter 14px, semibold
  - Padding: 6px 12px
  - Border-radius: 6px

- **Title (H1):**
  - e.g., "Tips to Keep Your Home Spotless Every Day"
  - Font: Inter 68px, semibold (or 48px on smaller screens)
  - Color: rgb(0, 11, 34)
  - Line-height: 1.1
  - Margin-top: 16px

- **Meta Row:**
  - Flex row with gap 24px
  - Margin-top: 20px
  - **Posted Date:** "Posted: Jan 17, 2026"
    - Font: Inter 16px, regular
    - Color: rgb(76, 80, 91)
  - **Read Time:** "5 Min Read"
    - Font: Inter 16px, regular
    - Color: rgb(76, 80, 91)

- **Short Description:**
  - e.g., "Discover easy, time-saving habits that help maintain a clean and organized home without extra effort."
  - Font: Inter 18px, regular
  - Color: rgb(76, 80, 91)
  - Line-height: 1.6
  - Margin-top: 16px

---

## 4. Blog Content Section
**Section Name:** Blog Article Body
**Background:** White (rgb(255, 255, 255))
**Layout:**
- Max-width: ~800px container (narrower for readability)
- Padding: 0 48px 60px
- Centered content

### Typography Hierarchy (Rich Text Styling):

**Paragraph (Body Text):**
- Font: Inter 18px, regular (or 16px)
- Color: rgb(0, 11, 34)
- Line-height: 1.8
- Margin-bottom: 24px

**H4 (Section Headings):**
- e.g., "1. Make Cleaning a Daily Habit", "2. Clean As You Go", "3. Declutter Regularly", "Final Thoughts"
- Font: Inter 32px, semibold
- Color: rgb(0, 11, 34)
- Line-height: 1.3
- Margin-top: 48px
- Margin-bottom: 16px

**Content 01 (Rich Text Block):**
Sample content from "5 simple tips" blog:

> "Keeping your home clean doesn't have to be overwhelming or time-consuming. With a few simple daily habits, you can maintain a fresh, organized, and stress-free living space without needing constant deep cleaning. Instead of doing everything at once, focus on small actions throughout the day that keep your home under control. Simple habits like tidying up after use, wiping surfaces regularly, and putting things back in their proper place can make a huge difference over time. These consistent efforts help prevent clutter from building up and make your home easier to manage. Here are five easy tips to help you keep your home spotless every day."

**Section 1 Content:**
> **H4:** "1. Make Cleaning a Daily Habit"
>
> **Paragraph:** "The key to a consistently clean home is small, regular effort practiced every single day. Instead of waiting for mess to pile up and become overwhelming, take a few minutes to tidy your space regularly. Simple actions like wiping surfaces, putting items back where they belong, and doing a quick sweep of high-traffic areas can create a noticeable difference over time. These small habits help maintain a fresh, organized environment without the need for exhausting deep cleaning sessions."

**Section 2 Content:**
> **H4:** "2. Clean As You Go"
>
> **Paragraph:** "One of the easiest ways to stay on top of cleaning is to handle messes immediately instead of letting them sit and build up over time. Taking a few minutes to wash dishes right after meals, wipe kitchen counters after cooking, and clean spills as soon as they happen can make a huge difference. These small actions prevent dirt and clutter from piling up, helping you maintain a clean and organized home without needing long cleaning sessions later."

**Inline Image 01:**
- Insert Body Image 01 between sections
- Full-width within content container (800px max)
- Border-radius: 12px
- Margin: 48px 0
- Alt text: Descriptive text for image
- Caption (optional): Center-aligned, Inter 14px, rgb(76, 80, 91)

**Section 3 Content:**
> **H4:** "3. Declutter Regularly"
>
> **Paragraph:** "A clutter-free space instantly feels cleaner, more peaceful, and better organized, even without any deep cleaning. When you take just a few minutes each day to remove unnecessary items, straighten surfaces, and return things to their proper places, your home naturally starts to look more put together. This simple habit reduces visual mess, creates a sense of calm, and makes your living space much easier to manage on a daily basis. Less clutter also means there is less dust collecting and fewer items to clean around, which saves both time and effort in the long run."

**CTA Callout Box (Optional):**
> **Paragraph (highlighted):** "If your schedule gets busy, consider hiring professional cleaning services to maintain your home and give you more time to focus on what matters most."
> - Background: rgb(241, 245, 251) or rgb(244, 245, 248)
> - Padding: 24px
> - Border-left: 4px solid rgb(10, 76, 224)
> - Font: Inter 18px, regular
> - Color: rgb(0, 11, 34)
> - Margin: 32px 0

**Inline Image 02:**
- Insert Body Image 02 if present
- Same styling as Image 01

**Final Section:**
> **H4:** "Final Thoughts"
>
> **Paragraph:** "A clean home doesn't require endless hours of work—it's built through small, consistent habits. By focusing on simple daily actions like tidying up after yourself, wiping surfaces, and organizing items, you can maintain a fresh and organized space without feeling overwhelmed. Over time, these small efforts become part of your routine, making it easier to keep your home looking its best every day."

---

## 5. Back Navigation
**Section Name:** Blog Navigation
**Background:** White
**Layout:**
- Padding: 40px 48px
- Centered or left-aligned
- Max-width: 800px

**Content:**
- **Link:** "Go Back" or "← Back to Blogs"
  - Font: Inter 16px, semibold
  - Color: rgb(10, 76, 224)
  - Hover: underline
  - Link to: /blogs

---

## 6. Contact Form Section (CTA)
**Same as Blog List Page** - Shared component

---

## 7. Footer
**Same as Blog List Page** - Shared component

---

# ALL BLOG SLUGS FOUND

1. `/blogs/smart-tips-for-a-lush-indoor-herb-garden`
2. `/blogs/tips-for-growing-a-healthy-indoor-herb-garden`
3. `/blogs/morning-habits-to-boost-your-mood-and-productivity`
4. `/blogs/how-to-grow-a-thriving-indoor-herb-garden`
5. `/blogs/morning-rituals-that-boost-productivity-and-mood`
6. `/blogs/5-easy-ways-to-keep-your-home-clean-daily`
7. `/blogs/5-simple-tips-to-keep-your-home-spotless-every-day`

**Total:** 7 blog posts

---

# IMAGE PLACEHOLDERS

Since the actual image URLs are dynamically loaded and may use Framer's asset system, use these placeholder patterns:

**Blog Card Images:**
- Use relevant stock images for cleaning, wellness, or productivity themes
- Aspect ratio: 16:9
- Size: ~800x450px minimum
- Format: JPG or WebP

**Blog Detail Banner:**
- Aspect ratio: 16:9 or 21:9 (wide)
- Size: ~1920x800px or 1920x1080px
- Format: JPG or WebP

**Blog Detail Inline Images:**
- Aspect ratio: 16:9 or 4:3
- Size: ~1200x675px or 1200x900px
- Border-radius: 12px
- Format: JPG or WebP

---

# RESPONSIVE BEHAVIOR

## Desktop (1200px+)
- Blog grid: 2 columns
- Max-width containers: 1200px (grid), 800px (article)
- H1: 68px → 48px on smaller desktops
- Padding: 60-80px vertical, 48px horizontal

## Tablet (768px - 1199px)
- Blog grid: 2 columns (smaller gap)
- H1: 48px
- H4: 28px
- Padding: 48px vertical, 32px horizontal

## Mobile (< 768px)
- Blog grid: 1 column
- H1: 36px
- H4: 24px
- H6: 20px
- Padding: 32px vertical, 24px horizontal
- Form fields: Stack to 1 column

---

# ANIMATIONS & INTERACTIONS

**Blog Card Hover:**
- Box-shadow: Elevate (0 8px 24px rgba(0, 0, 0, 0.12))
- Transform: translateY(-4px)
- Transition: 0.3s ease

**Button Hover:**
- Primary buttons: Darken by 10%
- Outline buttons: Fill with primary color, text to white
- Transition: 0.2s ease

**Link Hover:**
- Text links: Underline
- Nav links: Color change to primary blue

**Image Loading:**
- Lazy load with blur-up placeholder
- Fade-in transition 0.3s

---

# TECHNICAL NOTES FOR NEXT.JS IMPLEMENTATION

1. **Blog List Page:**
   - Use static generation (SSG) with `getStaticProps`
   - Fetch blog posts from CMS or local markdown files
   - Implement pagination or infinite scroll for "Load More"

2. **Blog Detail Page:**
   - Use dynamic routes: `app/blogs/[slug]/page.tsx`
   - Static generation with `getStaticPaths` + `getStaticProps`
   - Render rich text content using MDX or CMS rich text renderer

3. **CMS Integration:**
   - Structure blog posts with fields: title, shortDescription, category, date, readTime, bannerImage, content01, bodyImage01, bodyImage02, content02
   - Use Contentful, Sanity, or local MDX files

4. **SEO:**
   - Dynamic meta tags per blog post
   - Open Graph images (use banner image)
   - Structured data (BlogPosting schema.org)

5. **Image Optimization:**
   - Use Next.js `<Image>` component
   - Responsive images with srcset
   - WebP format with fallbacks

---

# ACCESSIBILITY

- Semantic HTML: `<article>`, `<header>`, `<nav>`, `<footer>`
- Alt text for all images
- ARIA labels for form fields
- Focus states for interactive elements
- Color contrast ratio: WCAG AA minimum (4.5:1 for body text)
- Keyboard navigation support

---

# END OF SPECIFICATION
