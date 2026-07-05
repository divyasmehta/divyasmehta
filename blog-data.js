/* ============================================================
   BLOG DATA — this is the only file you edit to add a blog.

   COMING SOON MODE:
   While BLOG_COMING_SOON is true, the blog page shows a
   "coming soon" message instead of posts. When you publish
   your first real post, set this to false.
   ============================================================ */
const BLOG_COMING_SOON = true;

/* ============================================================
   Add new posts to the TOP of this array (newest first).
   Fields:
     slug     — unique id used in the URL (no spaces)
     title    — post title
     date     — display date
     readTime — e.g. "6 min read"
     tag      — one short category label
     excerpt  — 1-2 sentence teaser shown in lists
     body     — array of paragraphs (plain strings), or use
                {h: "Sub heading"} objects for section headings
   ============================================================ */
const BLOG_POSTS = [
  {
    slug: "lorem-ipsum-latest",
    title: "Lorem ipsum dolor sit amet: consectetur adipiscing elit",
    date: "July 2, 2026",
    readTime: "6 min read",
    tag: "Engineering",
    excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      {h: "Sed ut perspiciatis unde omnis"},
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      {h: "Ut enim ad minima veniam"},
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
    ]
  },
  {
    slug: "lorem-post-2",
    title: "Excepteur sint occaecat: cupidatat non proident",
    date: "June 21, 2026",
    readTime: "4 min read",
    tag: "AI",
    excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      {h: "Quis autem vel eum iure"},
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    ]
  },
  {
    slug: "lorem-post-3",
    title: "Nemo enim ipsam voluptatem quia voluptas",
    date: "June 8, 2026",
    readTime: "8 min read",
    tag: "Yoga & Balance",
    excerpt: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    body: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      {h: "Neque porro quisquam est"},
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    ]
  },
  {
    slug: "lorem-post-4",
    title: "Ut enim ad minima veniam, quis nostrum",
    date: "May 25, 2026",
    readTime: "5 min read",
    tag: "Engineering",
    excerpt: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ]
  },
  {
    slug: "lorem-post-5",
    title: "At vero eos et accusamus et iusto odio",
    date: "May 10, 2026",
    readTime: "7 min read",
    tag: "Career",
    excerpt: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.",
    body: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
    ]
  },
  {
    slug: "lorem-post-6",
    title: "Temporibus autem quibusdam et aut officiis",
    date: "April 28, 2026",
    readTime: "3 min read",
    tag: "Food",
    excerpt: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.",
    body: [
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    ]
  },
  {
    slug: "lorem-post-7",
    title: "Nam libero tempore, cum soluta nobis",
    date: "April 12, 2026",
    readTime: "6 min read",
    tag: "AI",
    excerpt: "Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.",
    body: [
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
      "Omnis voluptas assumenda est, omnis dolor repellendus."
    ]
  }
];
