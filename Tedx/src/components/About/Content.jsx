import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const useIsTouchDevice = () => {
  if (typeof window !== 'undefined') {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
  return false;
};

const contentData = [
  {
    title: 'What is TED?',
    subtitle: `Technology, Entertainment and Design, the set of global conferences have been going with the spirit of ideas worth spreading since 1984. TED is a global community, welcoming people from every discipline and culture who seek a deeper understanding of the world. TED believes passionately in the power of ideas to change attitudes, lives, and ultimately, the world. TED is owned by a nonprofit, nonpartisan foundation. The agenda is to make great ideas accessible and spark conversation.`,
  },
  {
    title: 'WHY TEDx?',
    subtitle: (
      <>
        <b className='sm:text-4xl x-sm:text-3xl'>Imagine</b>&nbsp; yourself walking on your terrace during darks, sweeping off the many mosquitoes, while juggling between the questions about boundaries of life. If constraints define boundaries, TED defines essence of having no limits. TED, which means Technology, Entertainment, and Design, is a defined platform for infinite definitions. While TED is an international nonprofit organization streaming with talks and creativity where every little idea of this big universe is valued, TEDx can be considered as its little sister with the same origin of inheritance, where x means independent. TEDx, just like TED, welcomes speakers of different styles, types, and languages; gives them a space to share their idea, be it a big business management or an informal 'first flight experience' which fosters a little lesson of life. So, TEDx, operating over a specific region, working with ideas as soul, speakers as passion, and assembly as vision, invites everyone with a worthwhile thought to share and unleash the idea of experience.
      </>
    ),
  },
  {
    title: 'WE THE Vishnu Institute . .',
    subtitle: `Where the doozy strands of this world are surprisingly diverse, the idealities beyond the platforms are amazingly braided. Imagination is the space of the beyond; TEDxVishnuInstitute welcomes it for a spread over its venue. Our speakers unlock the caps of this space, clinging over the infinites of a brain. Going through disparate experiences in life can drastically change a person who they are. No matter what the circumstances may be, the eventuality leaves a lasting impression on the person and evinces the reality of uncertainty and instability the world can bring. One has to take risks in order to reap the benefits, or play it safe and expect mediocre results. Inspiration comes from nowhere but from within us, and taking the risks to break any kind of stereotypes and barriers will ultimately change our lives and set new standards, which also stimulates people around us to do the same.`,
  },
];

const Content = () => {
  const container = useRef(null);
  const isTouchDevice = useIsTouchDevice();
  const { scrollY } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const yTransform = useTransform(scrollY, [0, 200], [0, -50]);

  return (
    <main>
     
      <motion.div
        ref={container}
        className='flex flex-col items-center justify-center space-y-20 text-white'
        style={{ y: yTransform }}
      >
        <div className='flex flex-col gap-16'>
          {contentData.map((item, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-center justify-center h-[100vh] sticky top-0 overflow-hidden bg-black shadow-red-600 shadow-lg'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              drag={!isTouchDevice ? "y" : false} 
              dragConstraints={{ top: -100, bottom: 100 }}
            >
              <div className='flex flex-col items-center justify-center  rounded-[20px]'>
                <h2 className='text-red-600 border-b sm:text-5xl x-sm:text-2xl'>{item.title}</h2>
                <h3 className='px-[10vw] pt-8 sm:text-xl font-light x-sm:text-[14px] text-justify'>
                  {item.subtitle}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
    </main>
  );
};

export default Content;
