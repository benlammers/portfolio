import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ProjectPageQuery } from '../generated/types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';
import { Roles } from '../components/Roles';
import { Link } from '../components/Link';
import { Paragraph } from '../components/Paragraph';
import { HotspotImage } from '../components/HotspotImage';

const Project: React.FC<PageProps<ProjectPageQuery>> = ({ data }) => {
   const { project } = data;

   return (
      <main className="grid grid-rows-[max-content_max-content_1fr_max-content] h-full dark:bg-dark-gray-2 transition-colors duration-300">
         <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>{project.name} - Ben Lammers</title>
            <meta name="description" content={project.metaDescription} />
            <meta charSet="utf-8" />
         </Helmet>
         <Header />
         <Section
            id="banner"
            parentClass="pt-4 pb-8 lg:pb-32 xs:pb-16"
            contentClass="grid gap-8 lg:gap-12 xl:gap-16 md:grid-cols-[1fr_1fr] text-dark-gray dark:text-gray-100"
         >
            <div className="flex flex-col gap-2 justify-center">
               <h1 className="text-amber-400 font-bold uppercase text-5xl">{project.name}</h1>
               <Roles roles={project.roles} />
               <div className="flex py-6">
                  <Link href={project.repository} type="github" title="View Repository" ariaLabel={`Open repository for ${project.name}`} />
                  {project.projectLink && (
                     <Link href={project.projectLink.url} type="external" ariaLabel={`Open site for ${project.name}`} title={project.projectLink.title} />
                  )}
               </div>
               <div className="flex gap-4 my-2">
                  {project.stack.map((skill, index) => (
                     <GatsbyImage className="w-10 h-10" image={skill.image.asset.gatsbyImageData} alt={skill.alt} key={index} />
                  ))}
               </div>
            </div>
            <div className="aspect-video md:aspect-[9/10] lg:aspect-[7/8] md:justify-self-center shadow-lg md:w-[32vw] lg:max-w-[24rem]">
               <HotspotImage image={project.image} alt={project.imageAlt} />
            </div>
         </Section>
         <div className="flex flex-col gap-8 xs:gap-12 lg:gap-24 pb-16 xs:pb-24 md:pb-36">
            {project.page.map((section, index) => (
               <Section
                  id={`section-${index}`}
                  key={index}
                  parentClass="group"
                  contentClass="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-16 text-dark-gray dark:text-gray-100"
               >
                  <div className="flex flex-col gap-2 lg:group-even:col-start-2 lg:row-start-1">
                     <h2 className="heading-secondary">{section.title}</h2>
                     <Paragraph body={section.body} />
                  </div>
                  <div className="shadow-lg aspect-auto self-center lg:group-even:col-start-1 lg:row-start-1">
                     <HotspotImage image={section.image} alt={section.imageAlt} />
                  </div>
               </Section>
            ))}
         </div>
         <Footer />
      </main>
   );
};

export default Project;

export const query = graphql`
   query ProjectPage($id: String!) {
      project: sanityProject(id: { eq: $id }) {
         id
         name
         roles
         repository
         metaDescription
         projectLink {
            title
            url
         }
         image {
            asset {
               gatsbyImageData(placeholder: BLURRED, fit: FILL)
            }
            hotspot {
               x
               y
            }
         }
         imageAlt
         stack {
            alt
            image {
               asset {
                  gatsbyImageData(placeholder: BLURRED, fit: FILL)
               }
               hotspot {
                  y
                  x
               }
            }
         }
         page {
            title
            body {
               children {
                  marks
                  text
               }
            }
            image {
               asset {
                  gatsbyImageData(placeholder: BLURRED, fit: FILL)
               }
               hotspot {
                  x
                  y
               }
            }
            imageAlt
         }
      }
   }
`;
