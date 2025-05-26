"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import { Music } from 'lucide-react'

const TETROMINOS = {
  I: { shape: [[1, 1, 1, 1]], color: 'bg-sky-400' },
  J: { shape: [[1, 0, 0], [1, 1, 1]], color: 'bg-blue-600' },
  L: { shape: [[0, 0, 1], [1, 1, 1]], color: 'bg-orange-500' },
  O: { shape: [[1, 1], [1, 1]], color: 'bg-yellow-400' },
  S: { shape: [[0, 1, 1], [1, 1, 0]], color: 'bg-emerald-500' },
  T: { shape: [[0, 1, 0], [1, 1, 1]], color: 'bg-purple-600' },
  Z: { shape: [[1, 1, 0], [0, 1, 1]], color: 'bg-rose-500' },
}

const BOARD_WIDTH = 10
const BOARD_HEIGHT = 20
const INITIAL_DROP_TIME = 800
const SPEED_INCREASE_FACTOR = 0.95

const createEmptyBoard = () => Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0))

const randomTetromino = () => {
  const keys = Object.keys(TETROMINOS)
  const randKey = keys[Math.floor(Math.random() * keys.length)]
  return TETROMINOS[randKey]
}

export default function Tetris() {
  const [board, setBoard] = useState(createEmptyBoard())
  const [currentPiece, setCurrentPiece] = useState(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [dropTime, setDropTime] = useState(INITIAL_DROP_TIME)
  const [level, setLevel] = useState(1)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [completedRows, setCompletedRows] = useState([])
  const audioRef = useRef(null)
  const dropInterval = useRef(null)
  const gameContainerRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const checkCollision = (x, y, shape) => {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col] !== 0) {
          const newX = x + col
          const newY = y + row
          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT || (newY >= 0 && board[newY][newX] !== 0)) {
            return true
          }
        }
      }
    }
    return false
  }

  const isValidMove = (x, y, shape) => !checkCollision(x, y, shape)

  const moveLeft = useCallback(() => {
    if (currentPiece && isValidMove(currentPiece.x - 1, currentPiece.y, currentPiece.tetromino.shape)) {
      setCurrentPiece(prev => ({ ...prev, x: prev.x - 1 }))
    }
  }, [currentPiece, board])

  const moveRight = useCallback(() => {
    if (currentPiece && isValidMove(currentPiece.x + 1, currentPiece.y, currentPiece.tetromino.shape)) {
      setCurrentPiece(prev => ({ ...prev, x: prev.x + 1 }))
    }
  }, [currentPiece, board])

  const moveDown = useCallback(() => {
    if (!currentPiece) return
    if (isValidMove(currentPiece.x, currentPiece.y + 1, currentPiece.tetromino.shape)) {
      setCurrentPiece(prev => ({ ...prev, y: prev.y + 1 }))
    } else {
      placePiece()
    }
  }, [currentPiece, board])

  const rotate = useCallback(() => {
    if (!currentPiece) return
    const rotated = currentPiece.tetromino.shape[0].map((_, i) =>
      currentPiece.tetromino.shape.map(row => row[i]).reverse()
    )
    let newX = currentPiece.x
    let newY = currentPiece.y

    if (!isValidMove(newX, newY, rotated)) {
      if (isValidMove(newX - 1, newY, rotated)) {
        newX -= 1
      }
      else if (isValidMove(newX + 1, newY, rotated)) {
        newX += 1
      }
      else if (isValidMove(newX, newY - 1, rotated)) {
        newY -= 1
      }
      else {
        return
      }
    }

    setCurrentPiece(prev => ({
      ...prev,
      x: newX,
      y: newY,
      tetromino: { ...prev.tetromino, shape: rotated }
    }))

    if (isValidMove(newX, newY + 1, rotated) && newY + 1 < BOARD_HEIGHT) {
      setCurrentPiece(prev => ({ ...prev, y: prev.y + 1 }))
    }
  }, [currentPiece, board])

  const placePiece = useCallback(() => {
    if (!currentPiece) return
    const newBoard = board.map(row => [...row])
    currentPiece.tetromino.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          const boardY = y + currentPiece.y
          const boardX = x + currentPiece.x
          if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
            newBoard[boardY][boardX] = currentPiece.tetromino.color
          }
        }
      })
    })
    setBoard(newBoard)
    clearLines(newBoard)
    spawnNewPiece()
  }, [currentPiece, board])

  const clearLines = useCallback((newBoard) => {
    let linesCleared = []
    const updatedBoard = newBoard.filter((row, index) => {
      if (row.every(cell => cell !== 0)) {
        linesCleared.push(index)
        return false
      }
      return true
    })
    
    if (linesCleared.length > 0) {
      setCompletedRows(linesCleared)
      setTimeout(() => {
        while (updatedBoard.length < BOARD_HEIGHT) {
          updatedBoard.unshift(Array(BOARD_WIDTH).fill(0))
        }
        setBoard(updatedBoard)
        setCompletedRows([])
        
        const newScore = score + linesCleared.length * 100
        setScore(newScore)
        
        if (Math.floor(newScore / 500) > level - 1) {
          setLevel(prev => prev + 1)
          setDropTime(prev => prev * SPEED_INCREASE_FACTOR)
        }
      }, 500)
    }
  }, [score, level])

  const spawnNewPiece = useCallback(() => {
    const newPiece = {
      x: Math.floor(BOARD_WIDTH / 2) - 1,
      y: 0,
      tetromino: randomTetromino()
    }
    if (checkCollision(newPiece.x, newPiece.y, newPiece.tetromino.shape)) {
      setGameOver(true)
    } else {
      setCurrentPiece(newPiece)
    }
  }, [board])

  useEffect(() => {
    if (!currentPiece && !gameOver) {
      spawnNewPiece()
    }
  }, [currentPiece, gameOver, spawnNewPiece])

  useEffect(() => {
    if (!gameOver) {
      dropInterval.current = setInterval(moveDown, dropTime)
    }
    return () => clearInterval(dropInterval.current)
  }, [moveDown, gameOver, dropTime])

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver) return
      switch (e.key) {
        case 'ArrowLeft':
          moveLeft()
          break
        case 'ArrowRight':
          moveRight()
          break
        case 'ArrowDown':
          moveDown()
          break
        case 'ArrowUp':
          rotate()
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [moveLeft, moveRight, moveDown, rotate, gameOver])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5
      audioRef.current.loop = true
      if (!gameOver && isMusicPlaying) {
        audioRef.current.play().catch(error => console.error("Audio playback failed:", error))
      } else {
        audioRef.current.pause()
      }
    }
  }, [gameOver, isMusicPlaying])

  // Detect touch device
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (gameContainerRef.current.requestFullscreen) {
        gameContainerRef.current.requestFullscreen()
      } else if (gameContainerRef.current.webkitRequestFullscreen) {
        gameContainerRef.current.webkitRequestFullscreen()
      }
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
      setIsFullscreen(false)
    }
  }

  const resetGame = () => {
    setBoard(createEmptyBoard())
    setCurrentPiece(null)
    setScore(0)
    setGameOver(false)
    setDropTime(INITIAL_DROP_TIME)
    setLevel(1)
    setCompletedRows([])
    clearInterval(dropInterval.current)
  }

  const renderCell = (x, y) => {
    if (
      currentPiece &&
      currentPiece.tetromino.shape[y - currentPiece.y] &&
      currentPiece.tetromino.shape[y - currentPiece.y][x - currentPiece.x]
    ) {
      return currentPiece.tetromino.color
    }
    return board[y][x]
  }

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2 sm:p-8">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-8 text-gray-900">Tetris</h1>
      <div ref={gameContainerRef} className="bg-white p-2 sm:p-8 rounded-xl shadow-2xl flex flex-col items-center w-full max-w-[95vw] sm:max-w-none">
        <div
          className="grid mx-auto"
          style={{
            gridTemplateColumns: `repeat(${BOARD_WIDTH}, 1fr)`,
            width: '90vw',
            maxWidth: `${BOARD_WIDTH * 32}px`,
            height: '135vw',
            maxHeight: `${BOARD_HEIGHT * 32}px`,
            border: '2px solid #e5e7eb',
            aspectRatio: `${BOARD_WIDTH}/${BOARD_HEIGHT}`,
            background: '#f3f4f6'
          }}
        >
          {board.map((row, y) =>
            row.map((_, x) => (
              <AnimatePresence key={`${y}-${x}`}>
                <motion.div
                  initial={false}
                  animate={{
                    opacity: completedRows.includes(y) ? 0 : 1,
                    scale: completedRows.includes(y) ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-full h-full border border-gray-300 ${renderCell(x, y) || 'bg-gray-100'}`}
                  style={{ aspectRatio: '1/1' }}
                />
              </AnimatePresence>
            ))
          )}
        </div>
        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="mt-4 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 text-base font-semibold shadow"
        >
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
        {/* Mobile Controls */}
        {isTouch && (
          <div className="flex flex-col gap-2 mt-6 w-full items-center">
            <div className="flex gap-4 justify-center">
              <button
                aria-label="Left"
                className="bg-purple-500 text-white rounded-full w-14 h-14 text-2xl flex items-center justify-center shadow-lg active:scale-95"
                onClick={moveLeft}
              >←</button>
              <button
                aria-label="Rotate"
                className="bg-pink-500 text-white rounded-full w-14 h-14 text-2xl flex items-center justify-center shadow-lg active:scale-95"
                onClick={rotate}
              >⟳</button>
              <button
                aria-label="Right"
                className="bg-purple-500 text-white rounded-full w-14 h-14 text-2xl flex items-center justify-center shadow-lg active:scale-95"
                onClick={moveRight}
              >→</button>
            </div>
            <div className="flex justify-center mt-2">
              <button
                aria-label="Down"
                className="bg-purple-700 text-white rounded-full w-14 h-14 text-2xl flex items-center justify-center shadow-lg active:scale-95"
                onClick={moveDown}
              >↓</button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 text-2xl font-bold text-gray-900">Score: {score}</div>
      <div className="mt-2 text-xl text-gray-800">Level: {level}</div>
      <div className="mt-4 text-lg text-gray-600 bg-white/80 px-6 py-2 rounded-full backdrop-blur-sm">
        Use arrow keys to play: ← → ↓ (rotate: ↑)
      </div>
      {gameOver && (
        <div className="mt-6 text-3xl font-bold text-red-600 bg-white/90 px-8 py-3 rounded-xl shadow-lg">
          Game Over!
        </div>
      )}
      <div className="flex gap-6 mt-8">
        <Button
          onClick={resetGame}
          className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {gameOver ? 'Play Again' : 'Reset Game'}
        </Button>
        <Button
          onClick={toggleMusic}
          className="px-8 py-6 text-lg font-semibold bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
        >
          <Music className="w-6 h-6" />
          {isMusicPlaying ? 'Stop Music' : 'Play Music'}
        </Button>
      </div>
      <audio ref={audioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tetris-kxnh5j7hpNEcFspAndlU2huV5n6dvk.mp3" />
    </div>
  )
} 