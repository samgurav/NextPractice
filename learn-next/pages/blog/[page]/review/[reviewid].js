import { useRouter } from "next/router";
import React from "react";
useRouter;
function ReviewPages() {
  const router = useRouter();
  const { reviewid, page } = router.query;
  return (
    <div>
      product {page} review id is :{reviewid}
    </div>
  );
}

export default ReviewPages;
