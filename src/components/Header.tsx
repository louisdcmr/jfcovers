import GitHub from "./GitHub";

const Header = () => (
    <header className="flex items-center justify-between w-full">
        <h1 className="text-4xl font-bold my-8 w-full flex items-center gap-2">
            <img
                src={"/logo.svg"}
                alt={"JfCovers - DECRAEMER'Soft+"}
                className="h-9"
            />
            Jellyfin Cover Maker
        </h1>
    </header>
);

export default Header;
