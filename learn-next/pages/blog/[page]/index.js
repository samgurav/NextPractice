import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
function BlogPage() {
  const router = useRouter();
  const id = router.query.page;
  return <div>Blog Page {id}</div>;
}

export default BlogPage;
