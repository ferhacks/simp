const { create, Client } = require('@open-wa/wa-automate') // As consts aqui declaram as funções de outros arquivos
const welcome = require('./lib/welcome') // Ou de modulos que usei
const kconfig = require('./config')
const options = require('./options')
const color = require('./lib/color')
const config = require('./lib/config/config.json')

// Cria um cliente de inicialização da BOT
const start = (kill = new Client()) => {
    console.log(color('\n> DEV OFICIAL ='), color(' Samu330 > https://wa.me/+529984907794', 'yellow'))
	console.log(color('\n> GRUPO OFICIAL ='), color(' https://chat.whatsapp.com/Dwu4XpOYOGCDHYDlSoZZG0', 'yellow'))
	console.log(color('\n>'), color('[Samu330] Inicializacion finalizada, YA PUEDES USAR COMADOS...\n', 'red'))
	
		// Forçar recarregamento caso obtenha erros
		kill.onStateChanged((state) => {
			console.log('[Estado de Íris]', state)
			if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') kill.forceRefocus()
		})
	
		
        // Le as mensagens e limpa cache
        kill.onMessage((async (message) => {
            kill.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 2000) {
                    kill.cutMsgCache()
                }
            })
            kconfig(kill, message)
        }))
		
		// Configuração do welcome
        kill.onGlobalParicipantsChanged(async (heuh) => {
            await welcome(kill, heuh)
            })
        
		
		// Funções para caso seja adicionada em um grupo
        kill.onAddedToGroup(async (chat) => {
			const wlcmsg = 'Hola! 🌟\nMe solicitaron como BOT para este grupo y estaré a su disposición! 🤖\nSi quieres ver mis funciones usa /menu!'
			const lmtgru = await kill.getAllGroups()
            let totalMem = chat.groupMetadata.participants.length
			if (chat.groupMetadata.participants.includes(config.owner)) {
				await kill.sendText(chat.id, wlcmsg)
			} else if (gc.length > config.memberLimit) {
            	await kill.sendText(chat.id, `Un nuevo grupo, Epaaa! 😃\nLástima que no tenga el requisito, que es tener al menos ${config.memberLimit} miembros. Tienes ${totalMem}, reune más gente! 😉`)
				await kill.leaveGroup(chat.id)
				await kill.deleteChat(chat.id)
			} else if (lmtgruc.length > config.gpLimit) {
				await kill.sendText(chat.id, `¡Lo sentimos, estamos en la mayoría de los grupos! \nActualmente estamos en ${lmtgru.length}/${config.gpLimit}`)
				await kill.leaveGroup(chat.id)
				await kill.deleteChat(chat.id)
            } else {
                kill.sendText(chat.id, wlcmsg)
            }
        })
		

        // Bloqueia na call
        kill.onIncomingCall(( async (call) => {
            await kill.sendText(call.peerJid, 'Que pena!Las llamadas no son compatibles y son muy disruptivas! 😊\nTe bloqueé para evitar nuevos retrasos, contacta al propietario para desbloquear. 👋')
            .then(() => kill.contactBlock(call.peerJid)) // se quiser, pode inserir seu numero acima na sendText com wa.me ou apenas o numero, ou pode mudar pra kill.sendTextWithMentions pra enviar te marcando
        }))
    }

create(options(true, start))
    .then((kill) => start(kill))
    .catch((err) => new Error(err))
