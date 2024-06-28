import { Button } from 'flowbite-react'
import './SectionLatestNews.scss'
export default function SectionLatestNews() {
    return (
        <section className="container bg-transparent">
            <h2 className="text-5xl p-3">Latest News</h2>
            <div className="news1">
                <div className='p-2'><iframe width="560" height="315" src="https://www.youtube.com/embed/ujiEK7TZLFA?si=2iv61U-KIgsJ928Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                <div className='p-2'><img src="https://editorial.uefa.com//resources/028d-1af3653127a9-3afb0f92a076-1000/format/wide1/ucl_-_matchweek_preview_03_-_twitter_20240521171731.jpeg?imwidth=369" alt="" />
                    <p className='text-2xl'>The seasons numbers</p>
                </div>
                <div>
                    <img src="https://editorial.uefa.com//resources/028e-1b1f63c5fcb2-d2c59b6bf2ec-1000/format/wide1/fbl-euro-2024-fra-training.jpeg?imwidth=369" alt="" />
                    <p className='text-2xl'>The UEFA Champions League players at EURO 2024</p>
                </div>

            </div>
            <div className="news2 p-5">
                <div className='p-5'><img src="https://editorial.uefa.com//resources/028d-1ae099f7f35e-0eb0471e2257-1000/format/wide1/16x9_ucl_gots_2024_2.jpeg?imwidth=369" alt="" />
                    <p className='text-2xl'>Best games of the season?</p></div>
                <div className='p-5 '><img src="https://editorial.uefa.com//resources/028e-1b0b8f0dfe0d-c9a22aab691d-1000/format/wide1/ucl_-_fedex_-_itz_-_frame_x1_-_twitter.jpeg?imwidth=369" alt="" />
                    <p className='text-2xl'>How Madrid edged Dortmund</p></div>
                <div className="mainNews ">
                    <img className="image1" src="https://editorial.uefa.com//resources/028e-1b07ee971807-fcc05588a74e-1000/format/wide1/borussia_dortmund_v_real_madrid_cf_-_uefa_champions_league_final_2023_24.jpeg?imwidth=988" alt="" />
                    <p className="text text-white">

                        Watch all this season's goals
                    </p>
                    
                </div>
                
            </div>

            <div className='p-5'>
                
            <Button className='mx-12' outline gradientDuoTone="purpleToBlue">
               View all news
            </Button>
            </div>




        </section>
        
    )
}