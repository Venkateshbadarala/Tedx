import React from 'react'
import image from './mediaImg/DeWatermark.ai_1724509915453.png'
const Content = () => {
  return (
    <div className='text-white pt-[10rem] flex flex-col justify-center items-center space-y-20 '
    style={{  backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'contain',
    
}} 
    >
        
        <div className='flex flex-col gap-16'>
             
        <div className='flex flex-col items-center justify-center '>
                        <h2 className='text-5xl text-red-600 border-b  border-b'>What is TED?</h2>
                        <h3 className='px-[10vw] pt-8 text-xl font-light'>
                        Technology, Entertainment and Design,the set of global conferences have been going with the spirit of ideas worth spreading since 1984. TED is a global community, welcoming people from every discipline and culture who seek a deeper understanding of the world. TED believes passionately in the power of ideas to change attitudes, lives and, ultimately, the world. TED is owned by a nonprofit, nonpartisan foundation. The agenda is to make great ideas accessible and spark conversation.

                        </h3>
                    </div>
      
                    <div className='flex flex-col items-center justify-center '>
                        <h2 className='text-5xl font-bold text-red-600 border-b '>WHY TED<sup>x</sup> ?</h2>
                        <h3 className='px-[10vw] pt-8 text-xl font-light'>
                            <b className='text-4xl '>Imagine</b>&nbsp; yourself walking on your terrace during darks,
                            sweeping off the many mosquitoes,while juggling between the questions about boundaries of
                            life. If constraints define boundaries, TED defines essence of having no limits. TED which
                            means Technology Entertainment and Design, is a defined platform for infinite definitions.
                            While TED is an international nonprofit organization streaming with talks and creativity
                            where every little idea of this big universe is valued, TEDx can be considered as its little
                            sister with the same origin of inheritance, where x means independent. TEDx, just like TED,
                            welcomes speakers of different styles, types and languages; gives them a space to sharing
                            their idea, be it a big business management or an informal- 'first flight experience' which
                            fosters a little lesson of life. So, TEDx, operating over a specific region, working with
                            ideas as soul , speakers as passion and assembly as vision, invites everyone with a
                            worthwhile thought, to share and unleash the idea of experience.
                        </h3>
                    </div>
        </div>

               
                  
                    <div class="flex flex-col items-center justify-center p-10 ">
                    
                        <h2 className='text-5xl text-red-600 border-b '>WE THE Vishnu Institute . .</h2>
                        <h3 className='px-[10vw] pt-8 text-xl font-light' >Where the doozy strands of this world are surprisingly diverse, the idealities beyond the
                            platforms are amazingly braided. Imagination is the space of the beyond; TEDxVishnuInstitute
                            welcomes it for a spread over its venue. Our speakers unlock
                            the caps of this space, clinging over the infinites of a brain. Going through disparate
                            experiences in life can drastically change a person who they are. No matter what the
                            circumstances may be the eventuality leaves a lasting impression on the person and evince
                            the reality of uncertainty
                            and instability the world can bring. One has to take risks in order to reap the benefits, or
                            play it safe and expect mediocre results. Inspiration comes from no where but from within us
                            and taking the risks to break anykind
                            of stereotypes and barriers will ultimately change our lives and sets the new standards,
                            which also stimulates people around us to do the same.</h3>
                   
                </div>
                    
                </div>
    
  )
}

export default Content