'use strict'

import { app, BrowserWindow } from 'electron'

let mainWindow = null

app.on('window-all-closed', () => {
  app.quit()
})

let winProps = {
  width: 1000,
  height: 800
}

app.on('ready', () => {
  mainWindow = new BrowserWindow(winProps)

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
