import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import slugify from "../../../utils/slugify";
import khulnasoft_img from "../../../assets/images/khulnasoft/khulnasoft-only/svg/khulnasoft-gray-no-trim.svg";
import BlogPostSignOffWrapper from "./blogpost-signoff.styles";

const authorField = (author, isSlugAvailable) => {
  return (
    <>
      {
        isSlugAvailable ?
          <Link to={`/community/members/${slugify(author.name)}`}>
            <span>{author.name}</span>
          </Link>
          : <span>{author.name}</span>
      }
    </>
  );
};

const BlogPostSignOff = ({ author }) => {
  let isSlugAvailable = false;
  if (author){
    const validMembers = useStaticQuery(
      graphql`
            query blogvalidMemberss{
                allMdx(
                    filter:{ 
                        fields:{ collection:{eq:"members"} }
                    }
                ) {
                    nodes {
                        frontmatter {
                            name
                        }
                    }
                }
            }
            `
    );
    isSlugAvailable = validMembers.allMdx.nodes.some(matter => matter.frontmatter.name == author.name);
  }
  return (
    <BlogPostSignOffWrapper>
      - {author.name === "KhulnaSoft Team"
        ? <p className="sign-off"><img src={khulnasoft_img} alt="KhulnaSoft" /> Team</p>
        : <p className="sign-off">{authorField(author, isSlugAvailable)}</p>
      }
    </BlogPostSignOffWrapper>
  );
};
export default BlogPostSignOff;