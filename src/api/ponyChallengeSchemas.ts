import { z } from 'zod'

export const MazeParams	 = z.object({
        "maze-width": z.number().int().min(15).max(25),
        "maze-height": z.number().int().min(15).max(25),
        "maze-player-name": z.string(),
        "difficulty": z.number().int().min(1).max(10).optional()
})

export type MazeParamsType = z.infer<typeof MazeParams>
