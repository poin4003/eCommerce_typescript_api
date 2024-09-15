import mongoose, { Mongoose } from "mongoose";
import { countConnect } from "../helpers/check.connect";

const connectString = `mongodb://localhost:27017/shopDev`

export function mongoDBInstance() {
  let dbInstance: Mongoose | null = null;

  async function dbConnect(type: string = 'mongodb'): Promise<Mongoose | null> {
    if (dbInstance) {
      return dbInstance;
    }

    try {
      if (type === 'mongodb') {
        mongoose.set('debug', true);
        mongoose.set('debug', { color: true });

        dbInstance = await mongoose.connect(connectString, {
          maxPoolSize: 50
        });

        console.log(`Connected to MongoDB successfully`, countConnect());
      }

      return dbInstance;
    } catch (err) {
      console.error(`Error connecting to MongoDB: `, err);
      return null;
    }
  }

  return {
    getConnection: async (type: string = 'mongodb'): Promise<Mongoose | null> => {
      if (!dbInstance) {
        await dbConnect(type);
      }
      return dbInstance;
    }
  };
}


// class MongoDatabase {
//   private static instance: MongoDatabase | null = null;
//   private mongooseInstance: Mongoose | null = null;

//   private constructor() {
//     this.connect()
//   }

//   private async connect(type: string = 'mongodb') {
//     try {
//       if (type === 'mongodb') {
//         mongoose.set('debug', true);
//         mongoose.set('debug', { color: true });

//         this.mongooseInstance = await mongoose.connect(connectString, {
//           maxPoolSize: 50
//         });
//         console.log(`Connected to MongoDB successfully`, countConnect());
//       }
//     } catch (err) {
//       console.error('Error connecting to MongoDB: ', err);
//     }
//   }

//   public static getInstance(): MongoDatabase {
//     if (!MongoDatabase.instance) {
//       MongoDatabase.instance = new MongoDatabase();
//     }

//     return MongoDatabase.instance;
//   }

//   public getMongooseInstace(): Mongoose | null {
//     return this.mongooseInstance;
//   }
// }

// export default MongoDatabase.getInstance();