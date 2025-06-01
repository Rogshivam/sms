'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import BlockEditor from '@/components/editor/BlockEditor';

interface Content {
  title: string;
  content: any;
}

export default function EditorPage() {
  const params = useParams();
  const [content, setContent] = useState<Content>({
    title: '',
    content: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Start writing your content here...',
            },
          ],
        },
      ],
    },
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/content/${params.slug}`);
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.slug) {
      fetchContent();
    } else {
      setIsLoading(false);
    }
  }, [params.slug]);

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/content/${params.slug || ''}`, {
        method: params.slug ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });

      if (!response.ok) {
        throw new Error('Failed to save content');
      }
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <input
          type="text"
          value={content.title}
          onChange={(e) => setContent({ ...content, title: e.target.value })}
          placeholder="Enter title..."
          className="w-full text-2xl font-bold p-2 border rounded"
        />
      </div>
      <div className="border rounded p-4">
        <BlockEditor
          content={content.content}
          onChange={(newContent) => setContent({ ...content, content: newContent })}
        />
      </div>
      <div className="mt-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
} 