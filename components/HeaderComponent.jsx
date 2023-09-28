export default function HeaderComponent() {
    return (
        <div className="bg-[#1F1E1E] h-[5.5rem]">
            <div className="h-full flex items-center">
                <div className="pl-10 cursor-pointer">
                    <img src="https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEVzpLpazSvTBKU4FyBz7kj88yNzOV0MnhdgUnnv4eRU%2Fg7R11ozVnfhj%2F7Bviv3%2BWn2JakSeEb3IXFwELyJRmqg3sUcVpGyIB7j929UGsgubUM6%2Fy6UGamKN4wRlhf%2BS5g4Ot4MaSY9F%2F%2Fw38WDVggnMERWQ3j6yHSd4flocmLC%2B6O2kRd3vVEZrVoa5OdK8jsNxflszIzRJ7q3NjRMombQgZleE0D9IQOeDTJy85JPqENd5id2jYhzuSDYClsSNMt9RQxG4SMFsuA3vgP7bI7zn%2F5mKxedbqPmAz7tgR4xCKLfKFOLT%2FQU0CLc3k8qIXSJ2qgk3f4UkOYAgX8mFTPCYBgHtKd%2FqV3GEkf3L9vVuCpLoA9x%2Fc8YM8GnLUGbV9Wv71%2Bc88PDJZ2mLG6vV15Mpk55O3lWmc4RpU9PQo6pVpaT7zjfZvl5IFEiPIgeiuBNK%2FWKpqdmxOCweoUww2hPSOMvFXoNz8zhcwYPLxzJ3%2FV5QD3eAFKgbu7Ze0b2pmLmoeVNnBbuSiz258tiEvUKvcln27v5m%2FVTGj%2BVXX4tVpe5jWuNDV9GwS0H3swV&sz=w512" alt="" width="70rem" />
                </div>

                <div className="flex justify-center gap-12 w-full">
                    <h1 className="text-white text-2xl font-semibold cursor-pointer">Jogar</h1>
                    <h1 className="text-white text-2xl font-semibold cursor-pointer">Loja</h1>
                    <h1 className="text-white text-2xl font-semibold cursor-pointer">Explorer</h1>
                    <h1 className="text-white text-2xl font-semibold cursor-pointer">Ajuda</h1>
                </div>

                <div className="flex gap-6 pr-4">

                    <svg width="40" height="auto" viewBox="0 0 314 314" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                        <path d="M251.2 251.2C233.773 251.2 219.8 265.173 219.8 282.6C219.8 290.928 223.108 298.915 228.997 304.803C234.885 310.692 242.872 314 251.2 314C259.528 314 267.515 310.692 273.403 304.803C279.292 298.915 282.6 290.928 282.6 282.6C282.6 274.272 279.292 266.285 273.403 260.397C267.515 254.508 259.528 251.2 251.2 251.2ZM0 0V31.4H31.4L87.92 150.563L66.568 189.028C64.213 193.424 62.8 198.605 62.8 204.1C62.8 212.428 66.1082 220.415 71.9968 226.303C77.8855 232.192 85.8722 235.5 94.2 235.5H282.6V204.1H100.794C99.753 204.1 98.7547 203.686 98.0186 202.95C97.2825 202.214 96.869 201.216 96.869 200.175C96.869 199.39 97.026 198.762 97.34 198.291L111.47 172.7H228.435C240.21 172.7 250.572 166.106 255.91 156.529L312.116 54.95C313.215 52.438 314 49.769 314 47.1C314 42.9361 312.346 38.9427 309.402 35.9984C306.457 33.0541 302.464 31.4 298.3 31.4H66.097L51.339 0M94.2 251.2C76.773 251.2 62.8 265.173 62.8 282.6C62.8 290.928 66.1082 298.915 71.9968 304.803C77.8855 310.692 85.8722 314 94.2 314C102.528 314 110.515 310.692 116.403 304.803C122.292 298.915 125.6 290.928 125.6 282.6C125.6 274.272 122.292 266.285 116.403 260.397C110.515 254.508 102.528 251.2 94.2 251.2Z" fill="#F4ECFF" />
                    </svg>

                    <svg width="40" height="auto" viewBox="0 0 417 417" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                        <g clip-path="url(#clip0_74_43)">
                            <path d="M208.5 225.875C250.13 225.875 287.991 237.933 315.843 254.909C329.743 263.422 341.627 273.413 350.211 284.272C358.655 294.975 364.875 307.763 364.875 321.438C364.875 336.119 357.734 347.691 347.448 355.944C337.718 363.763 324.878 368.941 311.238 372.555C283.821 379.8 247.229 382.25 208.5 382.25C169.771 382.25 133.179 379.817 105.762 372.555C92.1222 368.941 79.2821 363.763 69.5521 355.944C59.2487 347.674 52.125 336.119 52.125 321.438C52.125 307.763 58.3453 294.975 66.7895 284.272C75.3728 273.413 87.2399 263.422 101.157 254.909C129.009 237.933 166.887 225.875 208.5 225.875ZM208.5 34.75C231.541 34.75 253.638 43.9029 269.93 60.1951C286.222 76.4873 295.375 98.5843 295.375 121.625C295.375 144.666 286.222 166.763 269.93 183.055C253.638 199.347 231.541 208.5 208.5 208.5C185.459 208.5 163.362 199.347 147.07 183.055C130.778 166.763 121.625 144.666 121.625 121.625C121.625 98.5843 130.778 76.4873 147.07 60.1951C163.362 43.9029 185.459 34.75 208.5 34.75Z" fill="#F4ECFF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_74_43">
                                <rect width="417" height="417" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
        </div>
    )
}