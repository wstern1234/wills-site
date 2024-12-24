import { useEffect, useState } from 'react';
import LazyImage from '../lazy-image';
import { AiOutlineContainer } from 'react-icons/ai';
import { getDevPost, getMediumPost } from '@arifszn/blog-js';
import { formatDistance } from 'date-fns';
import { SanitizedBlog } from '../../interfaces/sanitized-config';
import { ga, skeleton } from '../../utils';
import { Article } from '../../interfaces/article';

const BlogCard = ({
  loading,
  blog,
  googleAnalyticsId,
}: {
  loading: boolean;
  blog: SanitizedBlog;
  googleAnalyticsId?: string;
}) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (blog.source === 'medium') {
      getMediumPost({
        user: blog.username,
      }).then((res) => {
        setArticles(res);
      });
    } else if (blog.source === 'dev') {
      getDevPost({
        user: blog.username,
      }).then((res) => {
        setArticles(res);
      });
    }
  }, [blog.source, blog.username]);

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < blog.limit; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0">
                <div className="w-24 h-24 mask mask-squircle">
                  {skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto md:mx-0',
                      })}
                    </h2>
                    {skeleton({
                      widthCls: 'w-24',
                      heightCls: 'h-3',
                      className: 'mx-auto md:mx-0',
                    })}
                    <div className="mt-3">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto md:mx-0',
                      })}
                    </div>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-4',
                        className: 'md:mr-2 mx-auto md:mx-0',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderArticles = () => {
    return articles && articles.length ? (
      articles.slice(0, blog.limit).map((article, index) => (
        <a
          className="card shadow-lg compact bg-base-100 cursor-pointer"
          key={index}
          href={article.link}
          onClick={(e) => {
            e.preventDefault();

            try {
              if (googleAnalyticsId) {
                ga.event('Click Blog Post', {
                  post: article.title,
                });
              }
            } catch (error) {
              console.error(error);
            }

            window?.open(article.link, '_blank');
          }}
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0 opacity-90">
                <div className="w-24 h-24 mask mask-squircle">
                  <LazyImage
                    src={article.thumbnail}
                    alt={'thumbnail'}
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="text-center md:text-left w-full">
                    <h2 className="font-medium text-base-content opacity-60">
                      {article.title}
                    </h2>
                    <p className="text-base-content opacity-50 text-xs">
                      {formatDistance(article.publishedAt, new Date(), {
                        addSuffix: true,
                      })}
                    </p>
                    <p className="mt-3 text-base-content text-opacity-60 text-sm">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {article.categories.map((category, index2) => (
                        <div
                          className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content"
                          key={index2}
                        >
                          #{category}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))
    ) : (
      <div className="text-center mb-6">
        <AiOutlineContainer className="mx-auto h-12 w-12 opacity-30" />
        <p className="mt-1 text-sm opacity-50 text-base-content">
          No recent post
        </p>
      </div>
    );
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <div
            className={`card compact bg-base-100 ${
              loading || (articles && articles.length)
                ? 'shadow bg-opacity-40'
                : 'shadow-lg'
            }`}
          >
            <div className="card-body">
              <div className="mx-3 mb-2">
                <h5 className="card-title">
                  {loading ? (
                    skeleton({ widthCls: 'w-28', heightCls: 'h-8' })
                  ) : (
                    <span className="text-base-content opacity-70">
                      Articles
                    </span>
                  )}
                </h5>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-1 gap-6">
                  {loading || !articles ? renderSkeleton() : renderArticles()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;




// import { Fragment } from 'react';
// import LazyImage from '../lazy-image';
// import { ga, skeleton } from '../../utils';
// import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

// const BlogCard = ({
//   externalProjects,
//   header,
//   loading,
//   googleAnalyticId,
// }: {
//   externalProjects: SanitizedExternalProject[];
//   header: string;
//   loading: boolean;
//   googleAnalyticId?: string;
// }) => {
//   const renderSkeleton = () => {
//     const array = [];
//     for (let index = 0; index < externalProjects.length; index++) {
//       array.push(
//         <div className="card shadow-lg compact bg-base-100" key={index}>
//           <div className="p-8 h-full w-full">
//             <div className="flex items-center flex-col">
//               <div className="w-full">
//                 <div className="flex items-start px-4">
//                   <div className="w-full">
//                     <h2>
//                       {skeleton({
//                         widthCls: 'w-32',
//                         heightCls: 'h-8',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </h2>
//                     <div className="avatar w-full h-full">
//                       <div className="w-24 h-24 mask mask-squircle mx-auto">
//                         {skeleton({
//                           widthCls: 'w-full',
//                           heightCls: 'h-full',
//                           shape: '',
//                         })}
//                       </div>
//                     </div>
//                     <div className="mt-2">
//                       {skeleton({
//                         widthCls: 'w-full',
//                         heightCls: 'h-4',
//                         className: 'mx-auto',
//                       })}
//                     </div>
//                     <div className="mt-2 flex items-center flex-wrap justify-center">
//                       {skeleton({
//                         widthCls: 'w-full',
//                         heightCls: 'h-4',
//                         className: 'mx-auto',
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>,
//       );
//     }

//     return array;
//   };

//   const renderExternalProjects = () => {
//     return externalProjects.map((item, index) => (
//       <a
//         className="card shadow-lg compact bg-base-100 cursor-pointer"
//         key={index}
//         href={item.link}
//         onClick={(e) => {
//           e.preventDefault();

//           try {
//             if (googleAnalyticId) {
//               ga.event('Click External Project', {
//                 post: item.title,
//               });
//             }
//           } catch (error) {
//             console.error(error);
//           }

//           window?.open(item.link, '_blank');
//         }}
//       >
//         <div className="p-8 h-full w-full">
//           <div className="flex items-center flex-col">
//             <div className="w-full">
//               <div className="px-4">
//                 <div className="text-center w-full">
//                   <h2 className="font-medium text-center opacity-60 mb-2">
//                     {item.title}
//                   </h2>
//                   {item.imageUrl && (
//                     <div className="avatar opacity-90">
//                       <div className="w-24 h-24 mask mask-squircle">
//                         <LazyImage
//                           src={item.imageUrl}
//                           alt={'thumbnail'}
//                           placeholder={skeleton({
//                             widthCls: 'w-full',
//                             heightCls: 'h-full',
//                             shape: '',
//                           })}
//                         />
//                       </div>
//                     </div>
//                   )}
//                   <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </a>
//     ));
//   };

//   return (
//     <Fragment>
//       <div className="col-span-1 lg:col-span-2">
//         <div className="grid grid-cols-1">
//           <div className="col-span-2">
//             <div className="card compact bg-base-100 shadow bg-opacity-40">
//               <div className="card-body">
//                 <div className="mx-3 flex items-center justify-between mb-2">
//                   <h5 className="card-title">
//                     {loading ? (
//                       skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
//                     ) : (
//                       <span className="text-base-content opacity-70">
//                         {header}
//                       </span>
//                     )}
//                   </h5>
//                 </div>
//                 <div className="col-span-2">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {loading ? renderSkeleton() : renderExternalProjects()}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default BlogCard;
