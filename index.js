const { create, Client } = require('@open-wa/wa-automate') // As consts aqui declaram as funções de outros arquivos
const canvas = require('canvas-constructor')
const fs = require('fs-extra')
const kconfig = require('./config')
const options = require('./options')
const color = require('./lib/color')
const { sleep } = require('./lib/functions')
const config = require('./lib/config/config.json')
const welkom = JSON.parse(fs.readFileSync('./lib/config/welcome.json'))
const bklist = JSON.parse(fs.readFileSync('./lib/config/anti.json'))
const anti = JSON.parse(fs.readFileSync('./lib/config/blacklist.json'))
const fks = JSON.parse(fs.readFileSync('./lib/config/fake.json'))

// Cria um cliente de inicialização da BOT
const start = (kill = new Client()) => {
    console.log(color('\n[DEV]', 'red'), color('- +52 9984 9077 94 <-> https://chat.whatsapp.com/Dwu4XpOYOGCDHYDlSoZZG0'))
	console.log(color('[Íris]', 'red'), color('[Samu330] READY... Ya puedes usar coamndos\n'))
	
		// Forçar recarregamento caso obtenha erros
		kill.onStateChanged((state) => {
			console.log('[Estado da Íris]', state)
			if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') kill.forceRefocus()
		})
		
        // Le as mensagens e limpa cache
        kill.onMessage((async (message) => {
            kill.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 3000) {
                    kill.cutMsgCache()
                }
            })
            kconfig(kill, message)
        }))
	
		// Funções para caso seja adicionada em um grupo
        kill.onAddedToGroup(async (aaded) => {
			const wlcmsg = `Hola! 🌟\nMe solicitaron como BOT para este grupo, y estaré a su disposición! 🤖\nSi quieres ver mis funciones usa ${config.prefix}menu!`
			const lmtgru = await kill.getAllGroups()
            let totalMem = aaded.groupMetadata.participants.length
			if (aaded.groupMetadata.participants.includes(config.owner)) {
				await kill.sendText(aaded, wlcmsg)
			} else if (gc.length > config.memberLimit) {
            	await kill.sendText(aaded, `Un nuevo grupo, 7u7! 😃\nLástima que no tenga el requisito, que es tener al menos ${config.memberLimit} miembros. Tú tienes ${totalMem}, reune más gente! 😉`)
				await kill.leaveGroup(aaded)
				await kill.deleteChat(aaded)
			} else if (lmtgruc.length > config.gpLimit) {
				await kill.sendText(aaded, `Lo sentimos, estamos en grupos máximos!\nActualmente estamos en ${lmtgru.length}/${config.gpLimit}`)
				await kill.leaveGroup(aaded)
				await kill.deleteChat(aaded)
            } else {
                kill.sendText(chat.id, wlcmsg)
            }
        })
		

        // Bloqueia na call
        kill.onIncomingCall(async (call) => {
            await kill.sendText(call.peerJid, `Que pena! Las llamadas no son compatibles y dificultan mucho! 😊\nTe bloqueé para evitar digustos, contacta al dueño wa.me/${config.owner.replace('c.us', '')} para desbloquear. 👋`)
            await kill.contactBlock(call.peerJid)
        })
    }

create(options(true, start))
    .then((kill) => start(kill))
    .catch((err) => new Error(err))
