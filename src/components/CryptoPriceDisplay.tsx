import { useMemo } from "react"
import { useCryptoStore } from "../store"
import { Spinner } from "./Spinner"

export const CryptoPriceDisplay = () => {

    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)
    const hasResult = useMemo(() => !Object.values(result).includes('') , [result])


  return (
    <div className="result-wrapper">
        {loading ? <Spinner /> : hasResult && (
            <>
                <h2>Cotizacíon</h2>
                <div className="result">
                    <img 
                        src={`https://cryptocompare.com/${result.IMAGEURL}`}
                        alt="Imagen Cryptomoneda"
                     />
                    <div>
                        <p>El precio es de: <span>{result.PRICE}</span></p>
                        <p>Precio más alto del dia: <span>{result.HIGHDAY}</span></p>
                        <p>Precio más bajo del dia: <span>{result.LOWDAY}</span></p>
                        <p>Variacíon últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                        <p>Última actualizacíon: <span>{result.LASTUPDATE}</span></p>
                    </div>
                </div>
            </>
        )}
        
    </div>
  )
}
