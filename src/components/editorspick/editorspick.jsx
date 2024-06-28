
"use client";

import { Button } from "flowbite-react";


export default function Editorspick() {
  return (

    <section>

      <div>
        <div className="text-4xl p-5 mx-24">Editor's pick</div>


        <div className="flex p-12">
          <div className="p-12">
            <img src="https://editorial.uefa.com/resources/028e-1b0d4df88def-a9cded318069-1000/format/wide1/borussia_dortmund_v_real_madrid_cf_-_uefa_champions_league_final_2023_24.jpeg?imwidth=369" alt="" />
            <h5 className="text-gray-900">
              9 days ago
            </h5>
            <p className="text-2xl">
              2023/24 Priceless Moments
            </p>
          </div>

          <div className="p-12">
            <img src="https://editorial.uefa.com/resources/028e-1b0b99fcb8be-aeb67948b068-1000/format/wide1/topshot-fbl-eur-c1-psg-newcastle.jpeg?imwidth=369" alt="" />
            <h5 className="text-gray-900">
              10 days ago
            </h5>
            <p className="text-2xl">
              Mbappé: Every UCL goal
            </p>
          </div>

          <div className="p-12">
            <img src="https://editorial.uefa.com/resources/028e-1b0b01ad4bfa-9d19852ee93d-1000/format/wide1/real_madrid_cf_v_manchester_city_quarter-final_first_leg_-_uefa_champions_league_2023_24.jpeg?imwidth=369" alt="" />
            <h5 className="text-gray-900">
              10 days ago
            </h5>
            <p className="text-2xl">
              Top ten goals of 2023/24
            </p>
          </div>

          <div className="p-12">
            <img src="https://editorial.uefa.com/resources/028e-1b07fd3722f7-2e1d3c1a357b-1000/format/wide1/real_madrid_cf_v_ssc_napoli_group_c_-_uefa_champions_league_2023_24.jpeg?imwidth=369" alt="" />
            <h5 className="text-gray-900">
              11 days ago
            </h5>
            <p className="text-2xl">
              Real Madrid's road to glory: Every goal
            </p>

          </div>


        </div>

        <div className="mx-24">
          <Button outline gradientDuoTone="cyanToBlue">
            See all videos
          </Button>

          <img className="mx-96 p-5" src="src\assets\Screenshot_6.png" alt="" />
          <img className="mx-96 p-5" src="src\assets\Screenshot_7.png" alt="" />
        </div>

 



      </div>


    </section>





  );
}
