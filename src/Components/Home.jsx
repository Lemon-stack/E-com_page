import {Link} from 'react-router-dom'
export default function Home(){
	return(
  <section class="bg-center bg-cover h-full">
  <div class="mx-auto max-w-screen-xl px-4 py-28 lg:flex lg:h-screen lg:items-center">
    <div class="mx-auto max-w-xl text-center">
      <img class="w-full"
      src="./src/assets/bgImg.png" alt=""/>

      <p class="mt-4 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

        <Link to="/products"
          class="block w-full mt-10 rounded bg-blue-500 px-12 py-3 text-lg font-medium text-white shadow hover:bg-blue-400 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
        >Check them out
        </Link>
    </div>
  </div>
</section>
		)
}