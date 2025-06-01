import mongoose, { Schema, Document } from 'mongoose';

export interface IContent extends Document {
  title: string;
  slug: string;
  content: any; // JSON content from editor
  status: 'draft' | 'published';
  author: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  version: number;
}

const ContentSchema = new Schema<IContent>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: Schema.Types.Mixed, required: true },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    publishedAt: { type: Date },
    version: { type: Number, default: 1 },
  },
  { timestamps: true }
);

// Create text index for search
ContentSchema.index({ title: 'text', content: 'text' });

export const Content = mongoose.models.Content || mongoose.model<IContent>('Content', ContentSchema); 