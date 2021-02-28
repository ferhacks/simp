const config = require('./config/config.json')
const prefix = config.prefix
exports.help = help()
function help() {
	return `   *⎛ Mis comandos ⎠*

_ℹ️ - 👑Grupo oficial del bot!_ https://chat.whatsapp.com/I3LZkubco693HRBciBztOC
_ℹ️ - 🛑Si algún comando no funciona significa que el servidor se ha bloqueado y es necesario esperar a que vuelva._


👑Para empezar, usa el comando */aiden*

🏆GRACIAS POR USAR MI BOT🏆
_aiden te da las gracias, y quiere darte un insentivo por apoyarlo_❤


_____________________________________________


_Si notas algun error, usa el comando:_ */help*
_Para que aiden pueda arreglar ese error:D_
*GRACIAS:)*
 

✅ _PORFAVOR, USA BIEN LOS COMANDOS PARA QUE FUNCIONEN SIN ERRORES_

_${prefix}level_
*VEA SU RANKING Y NIVEL*

_${prefix}players_
*LISTO DE LOS 10 JUGADORES CON MAS xp*

*1 - ${prefix}iris (msg)*
_Quiere chatear un rato?_

*2 - ${prefix}sticker*
_Haz que tus imágenes se conviertan en stikers rápidamente!_

*3 - ${prefix}gif*
_Con eso también puedes hacer stikers con gifs!_

*4 - ${prefix}donate*
_Ayudame con tu suscripcion pls:)_

*5 - ${prefix}speak <msg>*
_Vamos a conversar por voz?_

*6 - ${prefix}creador*
_Conoce al chico genial que me construyó.._

*7 - ${prefix}dog*
_¿Amas a los cachorros? Porque yo no!_

*8 - ${prefix}ping*
_Bueno, esto es para medir lo rápido que soy._

*9 - ${prefix}tts (sigla de idioma) [frase]*
_¡También puedo imitar! Por voz!_

*10 - ${prefix}Idiomas*
_para usar con el comando superior._

*11 - ${prefix}groupinfo*
_Ver alguna información de este grupo._

*12 - ${prefix}anime [nombre]*
_Con eso buscas un anime._

*13 - ${prefix}loli*
_Lolis son para dar amor y cariño..._

*14 - ${prefix}waifu*
_Con eso mando foto de hermosa waifus._

*15 - ${prefix}neko*
_Bueno ... a veces un neko va bien_

*16 - ${prefix}Frase*
_En este comando te mando anime o frases inspiradoras._

*17 - ${prefix}randomAnime*
_Envía esto y te enviaré fotos de anime al azar._

*18 - ${prefix}getmeme*
_¿Por qué no disfrutar de algunos memes?_

*19 - ${prefix}Husb*
_Esto es lo mismo que waifu, pero en una versión masculina._

*20 - ${prefix}Light <Frase>*
_Uma logo de neon em luz._

*21 - ${prefix}Wallpaper (Nombre)*
_¿Quieres conseguir algunos fondos de pantalla? Quedate conmigo!_

*22 - ${prefix}quote*
_¿Qué tal si creas tu propia frase inspiradora?_

*23 - ${prefix}search (envie una foto)*
_Con eso puedes buscar fotos para encontrar el nombre del anime._

*24 - ${prefix}randomwall*
_Más fondos de pantalla de anime, pero esta vez son personajes._

*25 - ${prefix}botstat*
_Pongo aquí mucha de mi información sobre mensajes._

*26 - ${prefix}add (numero)*
_Con esto puedes agregar a tus amigos sin preguntarle al administrador._

*27 - ${prefix}SNoBG*
_Esto es para hacer stiker sin fondo._

*28 - ${prefix}ownerGroup*
_¿Quieres conocer al dueño del grupo pero te da pereza anotar los números? Utilizar esto!_

*29 - ${prefix}link*
_Si desea obtener el enlace del grupo, simplemente use este comando._

*30 - ${prefix}adms*
_Con eso llamo y les muestro quienes son los ADMS del grupo._

*31 - ${prefix}pokemon*
_¿Quieres ver fotos de pokemons?_

*32 - ${prefix}Flip*
_El viejo juego de aguila y sol..._

*33 - ${prefix}Roll*
_Este es el famoso juego de pareja o impar, es decir, dados._

*34 - ${prefix}poll*
_Consultar encuestas activas._

*35 - ${prefix}vote (número)*
_Vota en una encuesta si tienes una encuesta..._

*36 - ${prefix}newpoll (nombre)*
_Crea una encuesta para que otros voten._

*37 - ${prefix}ins (nombre)*
_Agregar opciones de votación en la encuesta._

*38 - ${prefix}dva*
_Para obtener fotos del DVA de OverWatchh._

*39 - ${prefix}hug*
_Aquí es donde pongo lindas imágenes que tienen un abrazo entre personajes de anime._

*40 - ${prefix}Baguette*
_¿Es hora de mi rollo?!_

*41 - ${prefix}Yuri*
_En caso de que te guste algo más lésbico en el anime, aquí tienes._

*42 - ${prefix}kiss @etiqueta a alguien*
_Haré que tu y tu amado se besen!_

*43 - ${prefix}girl*
_En caso de que seas feo, puedes conseguir fotos de chicas guapas aquí:(_

*94 - ${prefix}Math <expresion>*
_Realiza calculos matematicos._

*45 - ${prefix}screenshot*
_¿Tiene miedo de acceder a sitios web? Usa esto y te mostraré lo que hay dentro!_

*46 - ${prefix}Life*
_¿Qué tal si acechamos a alguien al azar en el mundo hoy??_

*47 - ${prefix}Fox*
_Lindos pequeños zorros, y no, no estoy hablando de Kurama, sino de los reales.!_

*48 - ${prefix}ID*
_Adquirir una identificación para chatear._

*49 - ${prefix}Random <assunto>*
_Si uso esto, elegiré a alguien al azar del grupo.._

*50 - ${prefix}image <nombre>*
_¿No hay Internet fuera de WhatsApp? Puedo ayudar enviando fotos desde pinterest._

*51 - ${prefix}gato*
_Lo mas hermoso que puede existir._

*52 - ${prefix}msg <frase>*
_Vamos a brincar de mimica por texto?_

*53 - ${prefix}make <frase>*
_Si quieres escribir en mi diario ~Death Note~ usa esto._

*54 - ${prefix}slogan <Nombre>*
_Puedo hacer lindos lemas para ti._

*55 - ${prefix}img <marque un sticker>*
_Si quieres obtener una foto de un stiker, puedo convertirla por ti._

*56 - ${prefix}Giphy <Link de giphy>*
_Haz stikers por enlace usando el sitio web giphy, es muy bueno._

*57 - ${prefix}send <link de imagen>* 
_Si quieres, puedo enviar las fotos desde un enlace.._

*58 - ${prefix}slap @marque_alguén*
_Golpea al que te cae mal>:v._

*59 - ${prefix}sip <Digite un IP>*
_Puedo obtener información de una IP._

*60 - ${prefix}scep <Digite un CEP>*
_Si quieres puedes pedirme que busque un código postal._

*61 - ${prefix}ship <@persona @persona>*
_¿Quieres saber cuánto coinciden tus amigos?_

*62 - ${prefix}Mac <número do MAC>*
_Con eso buscaré donde está el MAC._

*63 - ${prefix}Macaco*
_Obtén algunas fotos de monos aquí.._

*64 - ${prefix}Gender <nombre>*
_Si quieres saber sobre el nombre de alguien, usa este._

*65 - ${prefix}Death <nombre>*
_Calcularé la edad a la que morirás en función de las últimas muertes registradas._

*66 - ${prefix}simg <Usa una imagen>*
_Puedo buscar imágenes en Internet usando este comandoo._

*67 - ${prefix}upimg <Use una imagen>*
_Si usa este comando, subiré sus imágenes que duran 1 día._

*68 - ${prefix}store <nombre>*
_¿Obtener información de las aplicaciones de PlayStore? Con eso puedo ayudarte._

*69 - ${prefix}contar <mensage>*
_Quieres contar las letras que tienes en un texto?_

*70 - ${prefix}inverter <frase>*
_Si quieres invertir las palabras tenemos esto._

*71 - ${prefix}Google <xxx>*
_Busca cosas en Google._

*72 - ${prefix}baka*
_"Bakaaa!"_

*73 - ${prefix}ball*
_8 Ball de frases aleatorias._

*74 - ${prefix}cocegas*
_Hmmm, cosquillas en el anime, creo..._

*75 - ${prefix}Lizard*
_Fotinhas de lagarto nerr._

*76 - ${prefix}feed*
_Eventos relacionados con la comida en el anime._

*77 - ${prefix}quack*
_Ui ui, ve algunos patos ~gansos~ o lo que sea...?_

*78 - ${prefix}poke*
_Toma unos petelecos!_

*79 - ${prefix}cafune*
_Todos amamos a cafune..._

*80 - ${prefix}Kisu*
_Imagenes de besos..._

*81 - ${prefix}Tapa*
_Fotos de Pats!_

*82 - ${prefix}Truth*
_Algunas verdades sobre el universo del anime._

*83 - ${prefix}Icon*
_Iconos para por tu perfil._

*84 - ${prefix}Resposta <frase>*
_Agregue respuestas sobre Iris._

*85 - ${prefix}Face*
_Icono de cara de chicas animee._

*86 - ${prefix}Yaoi*
_Yaoi sin hentai._

*87 - ${prefix}Look*
_Ojos en la pantalla eheheh_

*88 - ${prefix}Holo*
_Imágenes de personajes holo._

*89 - ${prefix}pornhub <texto 1 | texto 2>*
_Crea tu propio logo de PornHub._

*90 - ${prefix}3D <texto>*
_Crear texto 3D._

*91 - ${prefix}Logo <nombre>*
_Crea logotipos negros y rosas._

*92 - ${prefix}gaming <nombre>*
_Crea logotipos de jugadores._

*93 - ${prefix}brainly <pergunta>*
_Busca mentalmente_

*94 - ${prefix}ttp <frase>*
_Convierte frases en stickers._

*95 - ${prefix}Neon <Frase1|Frase2|Frase3>*
_Un logotipo de neón estilo hackerman.._

*96 - ${prefix}Fogareu <Nick>*
_Crea logotipos de PUBG._

*96 - ${prefix}Thunder <frase>*
_Un logotipo de cielo con truenos.._

*97 - ${prefix}Wolf <Frase1|Frase2>*
_Logo de Lobos._

*98 - ${prefix}Light <Frase>*
_Un logo de neón en la luz.._

*99 - ${prefix}modd <nombre>*
_Aplicaciones mod._

*100 - ${prefix}happymod <nombree>*
_Busque apps en happymod._

*101 - ${prefix}stalkig <username>*
_Stalkeie instagram._

*102 - ${prefix}stalktw <username>*
_stalkeie twitter._

*103 - ${prefix}maps <local>*
_Muestra el mapa de una ubicación._

*104 - ${prefix}clima <ciudad>*
_Infórmate del clima actual de tu ciudad._

*105 - ${prefix}nasa -data <año/mes/dia>*
_Obtenha informações da nasa._

*106 - ${prefix}ptt <etiqueta un audio>*
_Haz que el bot grabe los audios del grupo/personas como si fuera suyo._

*107 - ${prefix}get <marque un archivo>*
_Pídale al bot que vuelva a enviar un archivo._

*108 - ${prefix}conv -h*
_Convertir temperatura o distancia._

*109 - ${prefix}fatos*
_Cuenta hechos de animales_

*110 - ${prefix}gado <@persona>*
_Mira lo fría que es._

*111 - ${prefix}aki*
_Jugar akinator._

*112 - ${prefix}curiosidade*
_Obtener curiosidades._

*113 - ${prefix}valor <cantidad/Tipo de Moneda>*
_Convertir monedas de otros países._

*114 - ${prefix}oculto*
_???_

*115 - ${prefix}detector*
_Detecta chicas calientes en el grupo._

*116 - ${prefix}gamemode <tipo>*
_Zonas solo comando de minecraft._

*117 - ${prefix}rolette*
_Jugar a la ruleta rusa._

*118 - ${prefix}Chance <De que>*
_Calcule los chances._

*119 - ${prefix}data*
_Data del sistema._

*120 - ${prefix}trecho*
_Frases de personas._

*121 - ${prefix}placa <aaa1111>*
_Extraer información del vehículo._

*122 - ${prefix}scnpj <27865757000102>*
_Extraer datos de un CNPJ._

*123 - ${prefix}coins*
_Vea la lista de monedas para usar en el comando 113, es una lista gigante._

*124 - ${prefix}wasted <foto>*
_Crea una imagem de wasted igual ao GTA V._

*Si un día mi creador llega a dejar todo, se colocarán tutoriales en /Readme.*`
}

exports.down = down()
function down() {
    return `
	*⏭ Downloads ⏭*
	
_⚠Si algún comando no funciona significa que el servidor se ha bloqueado y es necesario esperar⚠_
 
                     

╔═══╗♪	Mᴇʟᴀɴɪᴇ Mᴀʀᴛɪᴇɴᴇᴢ- Dᴇᴛᴇɴᴛɪᴏɴ
║███║ ♫   0:35 ━❍──────── -5:32
║(●)║♫	   ↻     ⊲  Ⅱ  ⊳     ↺
╚═══╝ ♪   VOLUME: ▁▂▃▄▅▆▇ 100%


*1 - ${prefix}Play <nombre>*
_Descargar música por nombre._

*2 - ${prefix}Video <nombre>*
_Descargar videos por nombre._

*3 - ${prefix}Mp3 <link de YouTube>*
_Descargar audios por enlace._

*4 - ${prefix}Mp4 <link de YouTube>*
_Descargar videos por enlace._

*5 - ${prefix}fb <link facebook>*
_Descargar videos de facebook._

*6 - ${prefix}ig <link instagram>*
_Descargar videos de instagram._

*7 - ${prefix}tw <link twitter>*
_Descargar videos de twitter._
©Licensed by aiden®
   █║▌│█│║▌║││█║▌║`
}

exports.adult = adult()
function adult() {
    return `

👑 Comandos de PV - Grupos NSFW 👑

*1 - ${prefix}RandomNeko*
_Tenemos nekos hentai por aquí e.e_

*2 - ${prefix}iHentai*
_Pero si no te gusta, también tenemos algunos aleatorios.!_

*3 - ${prefix}nh (codigo)*
_Sé feliz viendo NHentai conmigo e.e_

*4 - ${prefix}trap*
_Si te gustan las trampas, esto es para ti e.e_

*5 - ${prefix}blowjob*
_Anime mamada fotos._

*6 - ${prefix}iecchi*
_Unas fotos de ecchi que tengo aqui..._

*7 - ${prefix}feet*
_Hentai para amantes de los pies._

*8 - ${prefix}Lick*
_"Lambidinha..."_

*9 - ${prefix}Femdom*
_Algo así como un yuri... hentai..._

*10 - ${prefix}futanari*
_futanari?_

*11 - ${prefix}boobs*
_uff..._

*12 - ${prefix}masturb*
_Hmmm..._

*13 - ${prefix}Anal*
_Hentai "estándar" de anal claro._

*14 - ${prefix}nsfwicon*
_Foto de perfil +18 por aqui..._

*15 - ${prefix}randomLoli*
_Hentai de tipo Lolicon._

*16 - ${prefix}Hard*
_Hentai de diciplinización, por ejemplo, hentai de bofetadas a tope._

*17 - ${prefix}Pezinho*
_Fotos de pies._

*18 - ${prefix}Porn*
_Pornografia real._

*19 - ${prefix}Lesbian*
_Lesbianas reales besandose._

*20 - ${prefix}Pgay*
_Pornografia gay._

*21 - ${prefix}Tits*
_Fotos de pechos reales._

*22 - ${prefix}bsdm*
_Fotos BDSM._

*23 - ${prefix}Milf*
_Milfs reales._

*24 - ${prefix}Pussy*
_Hermosas manzanas cortadas por la mitad..._

*25 - ${prefix}Ass*
_..._

*26 - ${prefix}sporn*
_Busca en XVideos._

*27 - ${prefix}xvideos <link>
_Descargar porno de xvideos._`
}

exports.owner = owner()
function owner() {
    return `
*⚠ [Solo mi dueño] ⚠*

*1 - ${prefix}Clearall*
_Con eso todos los mensajes están limpios, tenga cuidado con los errores en inmunidad._

*2 - ${prefix}Broad (mensage)*
_Puedo enviar un mensaje a todos los que lo usen, pero cuidado con BAN._

*3 - ${prefix}Leaveall*
_dejar todos los grupos._

*4 - ${prefix}Tela*
_Pídeme una captura de pantalla._

*5 - ${prefix}Blocks*
_Averigua quién intentó llamarme, atacarme o inundarme._

*6 - ${prefix}welcome [enable|disable]*
_Me da la bienvenida y adiós._

*7 - ${prefix}encerrar*
_Hazme apagar._

*8 - ${prefix}Exclusive [on|off]*
_Activa comandos exclusivos como bomba, anti enlaces/porno._

*9 - ${prefix}kickall*
_Eliminar todos los miembros._

*10 - ${prefix}cmd <comando>*
_Ejecutar terminal/programación a través de WhatsApp._

*11 - ${prefix}mutepv <número use + o ->*
_Dile a Iris que ignore a las personas en el PV._`
}

exports.admins = admins()
function admins() {
    return `
*⚠ [Administradores] ⚠*
_Comandos que solo pueden usar los admins!_

*1 - ${prefix}kick @user o <Marque un mensage>*
_Expilse a miembros del grupo._

*2 - ${prefix}promote @user o <Marque un mensage>*
_Hacer que un miembro sea admin._

*3 - ${prefix}leave*
_Si quieres puedo salir del grupo._

*4 - ${prefix}demote @user o <Marque un mensage>*
_Quitarle adm a alguien._

*5 - ${prefix}everyone <assunto>*
_Marque a todos del grupo_

*6 - ${prefix}del [Marque un mensage del BOT]*
_Si necesita borrar mis mensajes, use esto._

*7 - ${prefix}onlyadms [on|off]*
_Con eso cierro y abro el grupo_

*8 - ${prefix}setimage*
_Dale al grupo una cara nueva!_

*9 - ${prefix}revoke*
_Si usa esto, restableceré el enlace._

*10 - ${prefix}Bomb <número sin espacio, + o - >*
_Ataca con spam SMS que viene a burlarse de tu grupo._

*11 - ${prefix}blacklist <on/off>*
_Prohibir a quien lo tenga cuando se una al grupo._

*12 - ${prefix}fake <on/off>*
_Ban a numeros de otros paises._

*13 - ${prefix}bklist <on/off número>*
_Agregar o eliminar personas de la lista negra._

*14 - ${prefix}mute <on/off>*
_Hazme dejar de hacer mandatos en el grupo de los que lo usaban._

*15 - ${prefix}unkick <Marque un mensage>*
_Deshacer una prohibición._

*16 - ${prefix}autosticker <on/off>*
_Crea stikers con todas las fotos que envíes._
`
}

exports.readme = readme()
function readme() {
    return `
____ Menu de ayuda _____

Si no entiende, llame a mi dueño, use el comando / creador o pregunte al grupo que alguien seguramente lo ayudará. XD

Cuando tenga tiempo, publicaré tutoriales aquí e.e

¡Gracias por usar!

Traductor: wa.me/+529984907794
Mantenedor: wa.me/+595986460945`
}

exports.donate = donate()
function donate() {
    return `
_No es necesario, pero si quieres contribuir, el paypal del creador de este bot es =_

paypal.me/iamferhacks

_O solo regalame tu suscripcion:D =_ 

https://www.youtube.com/channel/UCHD4T8Pfcv5PFVzsAbfAPZA
`
}

exports.lang = lang()
function lang() {
    return `
🔥 Idiomas para comandos de Voz 🔥
       ❌ Usar sin ' ' ❌
	
'af' =  'Africano'

'ar' =  'Arabico'

'au' =  'Inglês da Australia'

'br' =  'Português do Brasil'

'ca' =  'Catalã (Catalonia)'

'cn' =  'Chinês (Mandarin/China)'

'cs' =  'Tcheca'

'cy' =  'Galês'

'da' =  'Dinamarquês'

'de' =  'Germanico/Alemão'

'el' =  'Grega'

'en' =  'Inglês'

'eo' =  'Esperanto'

'es' =  'Espanhol'

'fi' =  'Finlandês'

'fr' =  'Francês'

'hi' =  'Hindi'

'hr' =  'Croácio'

'ht' =  'Haitiano'

'hu' =  'Húngaro'

'hy' =  'Armenico'

'id' =  'Indonesio'

'is' =  'islandês'

'it' =  'Italiano'

'jp' =  'Japonês'

'ko' =  'Coreano'

'la' =  'Latim'

'lv' =  'Letonês'

'mk' =  'Macedónio'

'nl' =  'Holandês'

'no' =  'Norueguês'

'pl' =  'Polonês'

'pt' =  'Português de Portugal'

'ro' =  'Romeno'

'ru' =  'Russo'

'sk' =  'Eslovaco'

'sp' =  'Espanhol da Espanha'

'sq' =  'Albanês'

'sr' =  'Servia'

'su' =  'Espanhol dos Estados Unidos'

'sv' =  'Sueco'

'sw' =  'Suaíli'

'ta' =  'Tamil'

'th' =  'Thailandês'

'tr' =  'Turco'

'tw' =  'Chinês (Mandarin/Taiwan)'

'uk' =  'Inglês do Reino Unido)'

'us' =  'Inglês dos Estados Unidos'

'vi' =  'Vietnamita'

'yu' =  'Chinês (Cantonesa)'

'zh' =  'Chinês'`
}

exports.convh = convh()
function convh() {
	return `_Para usar debe escribir_ * /conv [-sigla] [Número para convertir] * _, verifique las siglas y un ejemplo a continuación._
	
*-h* _= Este menú._

*-c* _= Convierte de Fahfenheit a Celsius._

*-f* _= Convierte Celsius a Fahfenheit._

*-q* _= Convierte Millas a Kilometros._

*-m* _= Convierte Kilometros a Millas._

_Exemplo de uso:_ */conv -c 113*
`}
