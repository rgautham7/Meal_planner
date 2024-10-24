import React from "react";
import { MovingBorderButton } from "./ui/MovingBorderButton";
import { AboutPageCard } from "./AboutPageCard";

export function AboutPage() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Content Starts Here */}
      <div className="relative z-20 text-center py-12 px-6 max-w-6xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6">
          Your Personal Meal Planner
        </h1>
        <p className="text-lg sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Welcome to MealCraft, your ultimate meal planning assistant. From crafting personalized meal plans to generating organized grocery lists, we make healthy eating simple, sustainable, and enjoyable.
        </p>

        <div className="flex justify-center">
          <MovingBorderButton
            borderRadius="1.75rem"
            className="text-xl font-bold h-16 w-48 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Get Started
          </MovingBorderButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <AboutPageCard>
        <div className="flex justify-center mb-4 p-4">
          <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
            width="80px" height="80px" viewBox="0 0 32 32" xmlSpace="preserve">
          <path fill="currentColor" d="M4,10h6V4H4V10z M6,6h2v2H6V6z M28,6v2H14V6H28z M4,19h6v-6H4V19z M6,15h2v2H6V15z M14,15h14v2H14
            V15z M4,28h6v-6H4V28z M6,24h2v2H6V24z M14,24h14v2H14V24z"/>
          </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Personalized Plans</h2>
          <p className="text-gray-300">
            Tailor your meals specifically to your dietary needs and fitness goals, helping you stay on track.
          </p>
        </AboutPageCard>

        <AboutPageCard>
          <div className="flex justify-center mb-4 p-4">
          <svg width="80px" height="80px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99999 1H15V3H6.99999V1Z" fill="currentColor"/>
            <path d="M6.99999 5H15V7H6.99999V5Z" fill="currentColor"/>
            <path d="M15 9H6.99999V11H15V9Z" fill="currentColor"/>
            <path d="M6.99999 13H15V15H6.99999V13Z" fill="currentColor"/>
            <path d="M3.28854 10.75H0.999993V9H3.28854C4.30279 9 5.12499 9.82221 5.12499 10.8364C5.12499 11.3407 4.91763 11.8228 4.55155 12.1696L3.41116 13.25H4.99999V15H0.999993V13.1236L3.348 10.8992C3.36523 10.8829 3.37499 10.8602 3.37499 10.8364C3.37499 10.7887 3.33629 10.75 3.28854 10.75Z" fill="currentColor"/>
            <path d="M2.358 1.125L0.723297 1.6699L1.2767 3.3301L2.125 3.04733V7H3.875V1.125H2.358Z" fill="currentColor"/>
          </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Easy Grocery Lists</h2>
          <p className="text-gray-300">
            Automatically generate detailed grocery lists based on your weekly meal plans, saving you time.
          </p>
        </AboutPageCard>

        <AboutPageCard>
          <div className="flex justify-center mb-4 p-4">
          <svg fill="currentColor" height="80px" width="80px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 196.979 196.979" xmlSpace="preserve">
          <g>
            <path d="M43.48,0C28.1,0.003,15.588,12.517,15.588,27.896v141.188c0,15.38,12.512,27.894,27.893,27.896h131.66
              c3.452,0,6.25-2.798,6.25-6.25v-21.646v-21.646V49.542V6.25c0-3.452-2.798-6.25-6.25-6.25H43.48z M43.481,12.5h125.41v37.042
              v91.645H43.48c-5.687,0.001-10.978,1.716-15.392,4.649V27.896C28.088,19.408,34.994,12.501,43.481,12.5z M168.891,184.479H43.482
              c-8.488-0.001-15.394-6.908-15.394-15.396c0-8.488,6.905-15.395,15.393-15.396h125.41v9.146h-98.41c-3.452,0-6.25,2.798-6.25,6.25
              c0,3.452,2.798,6.25,6.25,6.25h98.41V184.479z"/>
            <path d="M73.496,87.7v23.664c0,3.452,2.798,6.25,6.25,6.25h37.486c3.452,0,6.25-2.798,6.25-6.25V87.701
              c8.258-3.315,13.982-11.413,13.982-20.669c0-11.935-9.437-21.706-21.24-22.244c-4.161-5.506-10.644-8.791-17.734-8.791
              c-7.093,0-13.575,3.285-17.735,8.791c-11.804,0.538-21.241,10.31-21.241,22.244C59.514,76.289,65.239,84.386,73.496,87.7z
              M81.782,57.265c0.473,0,0.954,0.035,1.433,0.105c2.686,0.397,5.313-0.986,6.512-3.418c1.661-3.364,5.02-5.455,8.765-5.455
              c3.744,0,7.103,2.091,8.766,5.457c1.2,2.432,3.839,3.811,6.513,3.416c0.476-0.07,0.956-0.105,1.429-0.105
              c5.386,0,9.768,4.382,9.768,9.768c0,4.905-3.663,9.069-8.52,9.685c-3.122,0.396-5.463,3.053-5.463,6.2v22.196H85.996V83.331
              c0-0.007,0.001-0.015,0.001-0.021c0.207-3.293-2.182-6.18-5.455-6.593c-4.862-0.613-8.528-4.776-8.528-9.685
              C72.014,61.646,76.396,57.265,81.782,57.265z"/>
          </g>
          </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Healthy Recipes</h2>
          <p className="text-gray-300">
            Discover nutritious and delicious meals from around the world that suit your lifestyle and taste.
          </p>
        </AboutPageCard>

        <AboutPageCard>
          <div className="flex justify-center mb-4 p-4">
          <svg fill="currentColor" version="1.1" id="earth" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
            width="80px" height="80px" viewBox="0 0 196 256" enable-background="new 0 0 196 256" xmlSpace="preserve">
          <path d="M79.232,158.234h37.723l50.132-51.566H155.34c0.552-1.765,0.882-3.53,0.882-5.46c0-6.783-3.53-12.795-9.376-16.104
            c0.165-0.827,0.165-1.599,0.165-2.427c0-10.258-8.383-18.641-18.641-18.641c-5.901,0-11.361,2.813-14.835,7.39
            c-1.93-1.765-4.247-3.199-6.839-4.026c-0.552-9.762-8.714-17.483-18.531-17.483c-6.287,0-12.023,3.144-15.387,8.217
            c-2.427-1.103-5.019-1.71-7.666-1.71c-10.258,0-18.641,8.383-18.641,18.641c0,3.309,0.882,6.508,2.482,9.376
            c-5.57,3.309-9.21,9.376-9.21,15.938c0,2.151,0.496,4.247,1.103,6.232H28.935L79.232,158.234z M46.583,100.437
            c0-5.294,3.474-9.927,8.603-11.471l5.294-1.544l-3.861-3.971c-2.151-2.261-3.364-5.239-3.364-8.383
            c0-6.618,5.405-12.023,12.023-12.023c2.482,0,4.908,0.827,7.004,2.261l3.364,2.482l1.599-3.861c1.875-4.522,6.232-7.39,11.03-7.39
            c6.618,0,12.023,5.405,12.023,12.023c0,0.165,0,0.331-0.055,0.496l-0.386,3.805l3.144,0.496c3.53,0.552,6.618,2.647,8.438,5.736
            l3.53,6.067l2.427-6.508c1.71-4.688,6.232-7.831,11.196-7.831c6.618,0,12.023,5.405,12.023,12.023c0,0.993-0.165,2.041-0.551,3.309
            l-0.882,2.923l2.813,1.103c4.688,1.765,7.666,6.232,7.666,11.14c0,2.041-0.552,3.861-1.379,5.46H48.459
            C47.3,104.904,46.583,102.808,46.583,100.437z M118.644,215.096c0-7.527,2.901-15.053,8.624-20.855l34.811-34.811
            c3.685-3.685,9.644-3.685,13.328,0c3.685,3.685,3.685,9.644,0,13.328l-28.068,28.068c-1.254,1.098-1.254,3.058,0,4.312
            c1.254,1.254,3.215,1.254,4.469,0l27.911-27.911c3.058-2.901,4.626-6.899,4.626-11.055s-1.725-8.154-4.626-11.055
            c-1.254-1.411-3.058-2.587-4.783-3.371v-39.593c0-5.253,4.155-9.487,9.33-9.487c5.253,0,9.487,4.312,9.487,9.487V176.6
            c0.157,7.683-2.744,15.994-8.624,21.953l-24.226,24.226c-3.058,3.058-4.626,7.056-4.626,11.055V254h-37.555v-38.904H118.644z
            M77.356,215.096c0-7.527-2.901-15.053-8.624-20.855L33.921,159.43c-3.685-3.685-9.644-3.685-13.328,0
            c-3.685,3.685-3.685,9.644,0,13.328l28.068,28.068c1.254,1.098,1.254,3.058,0,4.312c-1.254,1.254-3.215,1.254-4.469,0
            l-27.911-27.911c-3.058-2.901-4.626-6.899-4.626-11.055s1.725-8.154,4.626-11.055c1.254-1.411,3.058-2.587,4.783-3.371v-39.593
            c0-5.253-4.155-9.487-9.33-9.487c-5.253,0-9.487,4.312-9.487,9.487V176.6c-0.157,7.683,2.744,15.994,8.624,21.953l24.226,24.226
            c3.058,3.058,4.626,7.056,4.626,11.055V254h37.555v-38.904H77.356z M99.398,42.888c-2.849-2.964-4.418-6.864-4.418-10.982
            c0-3.826,1.499-7.592,4.336-10.892c1.511-1.758,3.276-4.916,3.276-8.032c0-2.979-1.134-5.799-3.193-7.941L102.562,2
            c2.849,2.964,4.418,6.864,4.418,10.982c0,4.312-2.24,8.454-4.336,10.892c-2.173,2.529-3.275,5.231-3.275,8.032
            c0,2.979,1.134,5.799,3.193,7.941L99.398,42.888z M118.311,35.167c-1.451-1.51-2.251-3.499-2.251-5.601
            c0-1.975,0.785-3.89,2.334-5.691c1.641-1.909,3.395-5.158,3.395-8.552c0-3.241-1.235-6.311-3.478-8.642l-3.163,3.042
            c1.452,1.51,2.252,3.5,2.252,5.601c0,2.197-1.258,4.439-2.334,5.692c-2.221,2.583-3.394,5.541-3.394,8.552
            c0,3.242,1.235,6.311,3.477,8.642L118.311,35.167z M86.771,35.167c-1.452-1.51-2.252-3.5-2.252-5.601
            c0-1.975,0.785-3.89,2.334-5.691c1.641-1.909,3.394-5.159,3.394-8.552c0-3.241-1.235-6.31-3.476-8.642l-3.164,3.041
            c1.452,1.511,2.252,3.5,2.252,5.601c0,2.196-1.257,4.439-2.334,5.692c-2.22,2.583-3.394,5.541-3.394,8.551
            c0,3.241,1.235,6.311,3.476,8.642L86.771,35.167z"/>
          </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Prep Made Simple</h2>
          <p className="text-gray-300">
            Organize your cooking week with ease by preparing meals in advance and staying efficient.
          </p>
        </AboutPageCard>
        </div>
      </div>
    </div>
  );
}
