import HelloWorld from "./article/hello-world/page.mdx";

export default function Home() {
    return (
        <div className="p-10">

            {/*集成daisyUI后 mdx需要用 className="prose" 包裹 否则样式失效 https://daisyui.com/docs/layout-and-typography/#-1 */}
            <article >
                <HelloWorld/>
            </article>

            <button
                className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
                Button
            </button>
        </div>
    );
}
