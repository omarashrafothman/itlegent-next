
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-gray-900 text-white h-[100vh]">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <div className='mb-[20px] text-center flex items-center justify-center'>
              <Image src='https://itlegend.net/Website/assets/images/logo-1.png' alt='logo' width={400} height={400} />

            </div>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              It Legend platform offers you an enjoyable journey to learn programming during which you will not feel bored. You will get the information you need smoothly without facing difficulty in learning or spending long hours understanding and navigating between different sources.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 flex-col w-[90%] sm:w-[70%] mx-auto">
              <div>
                <label
                  htmlFor="name"
                  className="block overflow-hidden rounded-md border bg-white  border-gray-200 px-3 shadow-xs focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <span className="text-xs font-medium text-gray-700"> Student Name </span>

                  <input
                    type="text"
                    id="name"
                    placeholder="Ali Shahin"
                    className="mt-1 w-full border-none  border-0  focus:border-transparent py-1 focus:ring-0 focus:outline-hidden sm:text-sm  text-black"
                  />
                </label>
              </div>


              <Link
                className={`block w-full rounded-md border border-blue-600 px-12 py-3 text-sm font-medium text-white focus:ring-3 sm:w-auto  bg-blue-600 hover:bg-transparent hover:text-white" "
                  }`}
                href={"/courses"}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
