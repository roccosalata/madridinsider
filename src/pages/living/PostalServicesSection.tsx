
import React from 'react';
import PostAndMailInfo from "@/components/PostAndMailInfo";
import { postAndMailInfo } from "@/data/postalServices";

const PostalServicesSection = () => (
  <section id="postal-services" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Postal Services</h2>
    <PostAndMailInfo info={postAndMailInfo} />
  </section>
);

export default PostalServicesSection;
