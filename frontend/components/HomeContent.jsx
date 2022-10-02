import React from "react";

const HomeContent = () => {
  return (
    <>
      <div className="h-max w-full">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/atharva7/image/upload/v1664643964/samples/planttree_af1zl9.jpg"
            className="w-full h-fit"
          />
          <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
           Demeter, Smart Agriculture
          </h1>
          <h2 className="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">
            Make sure you cultivate efficiently with us!
          </h2>
          {/* <h3 className="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3> */}
          {/* <h3 className="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3> */}
        </div>
      </div>

      <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          <div class="shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
            <img
              class="object-cover w-full h-48"
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
              alt="Flower and sky"
            />

            <div class="relative p-4">
              <h3 class="text-base md:text-xl font-medium text-gray-800">
                This is card title
              </h3>

              <p class="mt-4 text-base md:text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                assumenda cumque deserunt dicta fugit optio placeat temporibus.
              </p>
            </div>
          </div>

          <div class="shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
            <img
              class="object-cover w-full h-48"
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
              alt="Flower and sky"
            />

            <div class="relative p-4">
              <h3 class="text-base md:text-xl font-medium text-gray-800">
                This is card title
              </h3>

              <p class="mt-4 text-base md:text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                assumenda cumque deserunt dicta fugit optio placeat temporibus.
              </p>
            </div>
          </div>

          <div class="shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
            <img
              class="object-cover w-full h-48"
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
              alt="Flower and sky"
            />

            <div class="relative p-4">
              <h3 class="text-base md:text-xl font-medium text-gray-800">
                This is card title
              </h3>

              <p class="mt-4 text-base md:text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                assumenda cumque deserunt dicta fugit optio placeat temporibus.
              </p>
            </div>
          </div>

          <div class="shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
            <img
              class="object-cover w-full h-48"
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
              alt="Flower and sky"
            />

            <div class="relative p-4">
              <h3 class="text-base md:text-xl font-medium text-gray-800">
                This is card title
              </h3>

              <p class="mt-4 text-base md:text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                assumenda cumque deserunt dicta fugit optio placeat temporibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
