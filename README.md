success: bool -> Se o lançamento ocorreu com sucesso.
failures: array de objeto 
  [{
    time: number -> Verificar que bosta de tempo é esse.
    altitude: number -> Altitude em km em que a falha ocorreu.
    reason: string -> motivo da falha ter ocorrido
  }]
flight_number: number -> contador do lançamento
name: string -> Nome do lançamento
date_utc: date -> Data e hora do lançamento
upcoming: bool -> false se já ocorreu, true se ainda vai ocorrer
links.patch.small: url -> imagem pequena dos lançamentos