import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, X } from 'lucide-react';
import { mainCategories } from '@/data/mainCategories';

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Create a searchable index of all content
  const searchableContent = React.useMemo(() => {
    const content: Array<{
      title: string;
      description: string;
      link: string;
      category: string;
      type: 'category' | 'subcategory';
    }> = [];

    mainCategories.forEach(category => {
      // Add main categories
      content.push({
        title: category.title,
        description: category.description,
        link: category.link,
        category: category.title,
        type: 'category'
      });

      // Add subcategories
      category.subcategories.forEach(sub => {
        content.push({
          title: sub.title,
          description: `Part of ${category.title}`, // Use category context as description
          link: sub.link,
          category: category.title,
          type: 'subcategory'
        });
      });
    });

    return content;
  }, []);

  const filteredResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return searchableContent.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    ).slice(0, 8); // Limit to 8 results
  }, [searchQuery, searchableContent]);

  const handleResultClick = () => {
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="hidden md:flex items-center gap-2 text-gray-600 hover:text-madrid-red border-gray-300 hover:border-madrid-red/50"
        >
          <Search className="h-4 w-4" />
          Search Madrid...
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-madrid-red" />
            Search Madrid Insider
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for attractions, neighborhoods, restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
              autoFocus
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchQuery.trim() && (
              <div className="space-y-2">
                {filteredResults.length > 0 ? (
                  <>
                    <p className="text-sm text-gray-600 mb-3">
                      Found {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
                    </p>
                    {filteredResults.map((result, index) => (
                      <a
                        key={index}
                        href={result.link}
                        onClick={handleResultClick}
                        className="block p-3 rounded-lg border border-gray-200 hover:border-madrid-red/50 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {result.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-1">
                              {result.description}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs bg-madrid-red/10 text-madrid-red px-2 py-1 rounded-full">
                                {result.category}
                              </span>
                              <span className="text-xs text-gray-500">
                                {result.type === 'category' ? 'Category' : 'Section'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Search className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600">No results found for "{searchQuery}"</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Try searching for attractions, neighborhoods, or activities
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;