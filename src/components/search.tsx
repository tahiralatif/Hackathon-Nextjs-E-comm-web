"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearchParams ,useRouter, usePathname} from "next/navigation";




export default function Search({placeholder}: { placeholder:string}){

    const SearchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();
    function handleSearch(term: string){
        const params = new URLSearchParams(SearchParams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathName} ? ${params.toString}`);
    }


    return(
        <>
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search"
            className="sr-only">
                Search
            </label>

            <input 
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm "
            type="search"  placeholder={placeholder}
            onChange={(e) => {
                handleSearch(e.target.value);
            }}
            defaultValue={SearchParams.get ('query')?.toString()}
            />

            <FaMagnifyingGlass
            className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2"/>
        </div>
        </>
    )
}