
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { mainCategories } from '@/data/mainCategories';
import { cn } from '@/lib/utils';

const DropdownNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {mainCategories.map((category) => (
          <NavigationMenuItem key={category.title}>
            <NavigationMenuTrigger className="bg-white data-[state=open]:bg-gray-50">
              <Link to={category.link} className="flex items-center gap-2 no-underline">
                {category.icon}
                {category.title}
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-80 bg-white">
                <div className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      to={category.link}
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {category.title}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {category.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
                <div className="grid gap-1">
                  {category.subcategories.slice(0, 6).map((subcategory) => (
                    <NavigationMenuLink key={subcategory.title} asChild>
                      <Link
                        to={subcategory.link}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">
                          {subcategory.title}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                  {category.subcategories.length > 6 && (
                    <NavigationMenuLink asChild>
                      <Link
                        to={category.link}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-madrid-red font-medium"
                        )}
                      >
                        View all →
                      </Link>
                    </NavigationMenuLink>
                  )}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DropdownNavigation;
