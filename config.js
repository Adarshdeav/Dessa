},
        }),
  NO_ONLINE:
    process.env.NO_ONLINE === undefined
      ? true
      : convertToBool(process.env.NO_ONLINE),
  CLR_SESSION:
    process.env.CLR_SESSION === undefined
      ? false
      : convertToBool(process.env.CLR_SESSION),
  SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
  DEBUG: DEBUG,
  REMOVEBG:
    process.env.REMOVEBG_KEY === undefined ? "false" : process.env.REMOVEBG_KEY,
  WARN_COUNT: process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  WARN_MSG:
    process.env.WARN_MSG === undefined ? "Ok bie" : process.env.WARN_MSG,
  ANTIJID: process.env.ANTIJID === undefined ? "" : process.env.ANTIJID,
 BOT_INFO:
      process.env.BOT_INFO || 'DESSA;DEAVO ;917907738112;https://cdn.ironman.my.id/i/9e9ofk.jpeg',
  AUDIO_DATA:
      process.env.AUDIO_DATA || 'DESSA;DEAVO;https://cdn.ironman.my.id/i/9e9ofk.jpeg',
   STICKER_PACKNAME:
    process.env.STICKER_PACKNAME === undefined
      ? "DEAVO,Queen dessa"
      : process.env.STICKER_PACKNAME,
  BRAINSHOP:
    process.env.BRAINSHOP === undefined
      ? "159501,6pq8dPiYt7PdqHz3"
      : process.env.BRAINSHOP,
  DIS_BOT:
    process.env.DISABLE_BOT === undefined ? "null" : process.env.DISABLE_BOT,
  FIND_API_KEY:
    process.env.FIND_API_KEY === undefined
      ? "null"
      : process.env.FIND_API_KEY,
      }
