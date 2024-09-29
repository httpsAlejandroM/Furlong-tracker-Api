
const parseInventoryData = (data: string) => {
    // Divide las lineas por saltos de línea
    const lines = data.split("\n").map((line) => line.trim());
  
    // Excluye lineas que sean encabezados, separadores, fechas o páginas
    const filteredLines = lines.filter(line => {
      return (
        line !== "" &&
        !line.includes("Pagina") &&
        !line.includes("Inventario_de_Playa") &&
        !line.includes("(Se omitio playa 'P' Dif.Inv.)") &&
        !line.includes("Fecha") &&
        !line.match(/-{5,}/) &&
        !line.match(/^TF\d{4}\w\s+\d{2}\/\d{2}\/\d{2}/)
      );
    });
  
    // Extrae las columnas relevantes de cada linea
    const columnas = filteredLines.map((line) => {
      const lineByChar = line.split("")
      return {
        serie: lineByChar.slice(0, 14).join("").trim(),
        client: Number(lineByChar.slice(20, 22).join("").trim()),
        model: lineByChar.slice(28, 43).join("").trim(),
        pre: lineByChar[60],
        ubi: Number(lineByChar.slice(61, 64).join("").trim()) || 0,
        fila: Number(lineByChar.slice(65, 68).join("").trim()) || 0,
        vinId: lineByChar.slice(99, 116).join("").trim(),
      }
    })
  
    return columnas
  };
  
  const parseUnityData = (data: string, numero: number) => {
   const arrayUnidades = parseInventoryData(data)
    
    return arrayUnidades[numero]
  }
  
  
  export {
    parseInventoryData,
    parseUnityData
  }
  
  
  