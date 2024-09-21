import { Request, Response, NextFunction } from 'express';

class AccessController {

  signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(`[P]::signUp::`, req.body);
      return res.status(200).json({
        code: '20001',
        metadata: { userid: 1 }
      });
    } catch (error) {

    }
  }
}

export default new AccessController();