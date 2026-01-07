# 🔧 Site Update Checklist

## What Still Needs to Be Updated

This checklist shows all placeholder content, broken links, and TODOs that need to be filled in before your site is complete.

---

## 🔴 CRITICAL - Must Update Before Deploying

### 1. **Contact Information** (`app/contact/page.tsx`)
**Lines 27, 35, 40, 56**

- [ ] **Email**: Replace `your.email@gatech.edu` with your actual email
- [ ] **LinkedIn**: Replace `https://linkedin.com/in/yourprofile` with your LinkedIn URL
- [ ] **GitHub**: Replace `https://github.com/yourusername` with your GitHub URL

**Current placeholders:**
```typescript
href="mailto:your.email@gatech.edu"
href="https://linkedin.com/in/yourprofile"
href="https://github.com/yourusername"
```

---

### 2. **Final Report PDF** (`public/reports/final_report.pdf`)
**File doesn't exist yet**

- [ ] **Add your PDF**: Place your final report at `public/reports/final_report.pdf`
- [ ] **Update Abstract** (`app/report/page.tsx` line 8): Replace the TODO abstract with your real abstract
- [ ] **Update Table of Contents** (`app/report/page.tsx` lines 10-20): Update if your report has different sections

**Current placeholder:**
```typescript
const abstract = "TODO: Add abstract from your final report here...";
```

---

## 🟡 IMPORTANT - Should Update Soon

### 3. **Team Member Contributions** (`app/team/page.tsx`)
**Lines 64, 68, 90, 94**

- [ ] **Khadijah's contributions** (line 64): Replace "TODO: Describe Khadijah's specific contributions"
- [ ] **Khadijah collaboration** (line 68): Replace "TODO: Add collaboration examples"
- [ ] **Maymuna's contributions** (line 90): Replace "TODO: Describe Maymuna's specific contributions"
- [ ] **Maymuna collaboration** (line 94): Replace "TODO: Add collaboration examples"

**Current placeholders:**
- "TODO: Describe Khadijah's specific contributions"
- "TODO: Add collaboration examples"
- "TODO: Describe Maymuna's specific contributions"
- "TODO: Add collaboration examples"

---

### 4. **Timeline Artifacts** (`public/data/timeline.json`)
**Lines 8, 37**

- [ ] **August 2023 artifact** (line 8): Replace `{"label": "Notes (TODO)", "href": "/"}` with actual notes link
- [ ] **December 2023 artifact** (line 37): Replace `{"label": "Semester report (TODO)", "href": "/report"}` - this one links to `/report` which is fine, but update the label if you have a specific report name

**Current placeholders:**
```json
{"label": "Notes (TODO)", "href": "/"}
{"label": "Semester report (TODO)", "href": "/report"}
```

---

### 5. **Evidence Links** (`public/data/evidence.json`)
**Lines 8, 23, 34**

- [ ] **Analysis Notebook** (line 8): Replace `"href": "#"` with link to your notebook (GitHub, Google Drive, etc.)
- [ ] **Model Code** (line 23): Replace `"href": "#"` with link to your model code repository
- [ ] **Meeting Notes** (line 34): Replace `"href": "#"` with link to meeting notes (or remove if not available)

**Current placeholders:**
```json
{"label": "Analysis Notebook", "href": "#"}
{"label": "Model Code", "href": "#"}
{"label": "Meeting Notes", "href": "#"}
```

---

### 6. **Results Page - Methods Snapshot** (`app/results/page.tsx`)
**Lines 235, 239, 243, 247**

- [ ] **Model Type** (line 235): Replace "TODO: Specify model type" with actual model (e.g., "Random Forest", "Linear Regression", "Neural Network")
- [ ] **Key Features** (line 239): Replace "TODO: List key features" with actual features used
- [ ] **Evaluation Metrics** (line 243): Replace "TODO: List metrics" with actual metrics (e.g., "R² = 0.85, RMSE = 0.12")
- [ ] **Validation Approach** (line 247): Replace "TODO: Describe validation strategy" with your validation method

**Current placeholders:**
- "TODO: Specify model type (e.g., Random Forest, Linear Regression)"
- "TODO: List key features used in analysis"
- "TODO: List metrics (e.g., R², RMSE, MAE)"
- "TODO: Describe validation strategy"

---

### 7. **Results Page - Evidence Links** (`app/results/page.tsx`)
**Lines 277, 282**

- [ ] **Analysis Notebooks** (line 277): Replace "TODO: Link to analysis notebooks" with actual links
- [ ] **Validation Results** (line 282): Replace "TODO: Link to validation results" with actual links

**Current placeholders:**
- "TODO: Link to analysis notebooks or code repositories"
- "TODO: Link to validation results and performance metrics"

---

## 🟢 OPTIONAL - Can Update Later

### 8. **Evidence Entry** (`public/data/evidence.json`)
**Line 47**

- [ ] **Model accuracy claim** (line 44-47): This entry says "Model achieves X% accuracy" and is marked "needs evidence". Either:
  - Remove this entry if you don't have validation results
  - Update with actual accuracy and evidence if you do have it

**Current:**
```json
{
  "claim": "Model achieves X% accuracy on validation set",
  "status": "needs evidence",
  "evidence": [],
  "notes": "TODO: Add validation results when available..."
}
```

---

### 9. **Data Files** (Optional - for actual results)

These have placeholder data but work fine for now:

- [ ] **Observed Data** (`public/data/observed.json`): Replace placeholder charts with your actual results
- [ ] **Forecast Data** (`public/data/forecast.json`): Replace placeholder forecasts with your actual model outputs
- [ ] **GeoJSON Map** (`public/data/predictions.geojson`): Replace placeholder regions with your actual geographic data

**Note**: These are marked as "TODO" in the files but the site works fine with placeholder data. Update when you have real results.

---

## 📋 Summary by File

### Files That Need Updates:

1. **`app/contact/page.tsx`** - 3 placeholders (email, LinkedIn, GitHub)
2. **`app/report/page.tsx`** - 1 placeholder (abstract)
3. **`app/team/page.tsx`** - 4 TODOs (team contributions)
4. **`app/results/page.tsx`** - 6 TODOs (methods + evidence links)
5. **`public/data/timeline.json`** - 2 artifact links
6. **`public/data/evidence.json`** - 3 broken links (#)
7. **`public/reports/final_report.pdf`** - File doesn't exist

### Files That Are Complete:

✅ **`app/page.tsx`** - Home page (uses JSON data)  
✅ **`app/about/page.tsx`** - About page (VIP URL updated)  
✅ **`app/timeline/page.tsx`** - Timeline page (uses JSON data)  
✅ **`app/sources/page.tsx`** - Sources page (uses JSON data)  
✅ **`app/evidence/page.tsx`** - Evidence page (uses JSON data)  
✅ **`public/data/timeline.json`** - Timeline data (complete)  
✅ **`public/data/sources.json`** - Sources data (complete)  
✅ **`public/data/home-content.json`** - Home content (complete)

---

## 🎯 Quick Fix Priority Order

**Do these first (5 minutes):**
1. Update contact info (email, LinkedIn, GitHub)
2. Add final report PDF
3. Update report abstract

**Do these next (15 minutes):**
4. Update team contributions
5. Fix evidence links (replace `#` with real URLs)
6. Update timeline artifacts

**Do these when ready (30 minutes):**
7. Fill in methods snapshot
8. Add evidence links on results page
9. Update data files with real results

---

## 🔍 How to Find Each Item

### In Your Code Editor:
- Search for `TODO` to find all TODOs
- Search for `your.` to find placeholder text
- Search for `href="#"` to find broken links
- Search for `placeholder` to find placeholder content

### In the Browser:
- Visit each page and look for:
  - "TODO" text
  - Links that go to `#` or `/`
  - Placeholder email addresses
  - "Customize" instruction boxes

---

## ✅ After Updates

Once you've updated everything:
1. Run `npm run build` to verify no errors
2. Test all links work
3. Check all pages load correctly
4. Review the Evidence page to ensure all claims have evidence
5. Deploy to Vercel!

---

**Last Updated**: January 2026  
**Total Items to Update**: ~20 items across 7 files


