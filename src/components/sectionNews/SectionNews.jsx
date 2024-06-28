import "./sectionNews.scss"
export default function SectionNews() {
    return (
        <section className="bg-blue-500">
            <div className="container p-12 ">
                <div className=" columns-1 md:columns-2 bg-gray-500">
                    <div className="mainNews">
                        <img className="image1" src="src\assets\sectionNews\borussia_dortmund_v_real_madrid_cf_-_uefa_champions_league_final_2023_24.avif" alt="" />
                        <p className="text text-white">
                            Highlights, report: Madrid win Champions League!
                        </p>

                    </div>
                    <div>
                        <div className="text-5xl text-white p-2">
                            Headlines
                        </div>
                        <div className=" flex p-2">
                            <div>
                                <img src="https://editorial.uefa.com/resources/028e-1b1f32fb185e-ae869eecaf0a-1000/format/wide1/borussia_dortmund_training_session_and_press_conference_-_uefa_champions_league_final_2024.jpeg?imwidth=158" alt="" />
                            </div>
                            <p className="text-white p-5 text-2xl">
                                2024/25 match, draw dates
                            </p>
                        </div>

                        <div className="flex p-2">
                            <div>
                                <img src="https://editorial.uefa.com/resources/0285-1918071c1df9-b34c64ad82b9-1000/format/wide1/ucl2024.jpeg?imwidth=158" alt="" />
                            </div>
                            <p className="text-white p-5 text-2xl">

                                New Champions League format
                            </p>
                        </div>
                        <div className="flex p-2">
                            <div>
                                <img src="https://editorial.uefa.com/resources/028e-1b1110b296dd-24a880099bf8-1000/format/wide1/fbl-eur-c1-draw-trophy.jpeg?imwidth=158" alt="" />
                            </div>
                            <p className="text-white p-5 text-2xl">
                                First qualiying round draw
                            </p>
                        </div>

                        <div className="flex p-2">
                            <div>
                                <img src="https://editorial.uefa.com/resources/0282-183b47300270-0e228d5e887f-1000/format/wide1/ucl_team_of_the_season.jpeg?imwidth=158" alt="" />
                            </div>
                            <p className="text-white p-5 text-2xl">
                                2023/24 Team of the Season
                            </p>
                        </div>

                        <div className="flex p-2">
                            <div>
                                <img src="https://editorial.uefa.com/resources/0285-18fc142a7e9c-35a41df6b2da-1000/format/wide1/2324_ucl_app_promo.png?imwidth=158" alt="" />
                            </div>
                            <p className="text-white p-5 text-2xl">
                                Get the Champions League app
                            </p>
                        </div>





                    </div>
                </div>
            </div>

        </section>
    )
}