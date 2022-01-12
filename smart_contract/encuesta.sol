// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.7;

contract EncuestaContract{
    struct Encuesta {
        uint256 id;
        string pregunta;
        uint64[] votos;
        string[] opciones;
    }

    struct Votante{
        address id;
        uint256[] votadas;
        mapping(uint256 => bool) MapVotadas;
    }

    Encuesta[] private encuestas;
    mapping(address => Votante) private votantes;

    event EncuestaCreada(uint256 _encuestaID);

    function crearEncuesta(string memory _pregunta, string[] memory _opciones) public {
        require(bytes(_pregunta).length > 0, "Error: Pregunta requerida");
        require(_opciones.length > 1, "Error: Opciones requeridas");
        uint256 encuestaId = encuestas.length;
        Encuesta memory nuevaEncuesta = Encuesta({
            id: encuestaId,
            pregunta: _pregunta,
            opciones: _opciones,
            votos: new uint64[](_opciones.length)
        });
        encuestas.push(nuevaEncuesta);
        emit EncuestaCreada(encuestaId);
    }

    function getEncuesta(uint256 _encuestaID) external view returns(uint256, string memory, uint64[] memory, string[] memory) {
        require(_encuestaID < encuestas.length, "Identificador de encuesta incorrecto");
        return (
            encuestas[_encuestaID].id,
            encuestas[_encuestaID].pregunta,
            encuestas[_encuestaID].votos,
            encuestas[_encuestaID].opciones
        );
    }

    function votar(uint256 _encuestaID, uint64 _voto) external {
        require(_encuestaID < encuestas.length, "Identificador de encuesta incorrecto");
        require(_voto < encuestas[_encuestaID].opciones.length);
        require(votantes[msg.sender].MapVotadas[_encuestaID] == false, "Ya has votado esta encuesta");

        encuestas[_encuestaID].votos[_voto] += 1;
        votantes[msg.sender].votadas.push(_encuestaID);
        votantes[msg.sender].MapVotadas[_encuestaID] = true;
    }

     function getVotante(address _id) external view returns(address, uint256[] memory) {
         return (
             votantes[_id].id,
             votantes[_id].votadas
         );
     }

    function getTotalEncuestas() external view returns(uint256) {
        return encuestas.length;
    }
}
