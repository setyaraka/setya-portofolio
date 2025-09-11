import Image from "next/image";

const LottiFilesLogo = () => (
    <div className="h-5 w-5 relative">
        <Image 
            src={"/assets/lottifiles.png"}
            fill
            alt="lottifiles logo"
        />
    </div>
)

export default LottiFilesLogo;