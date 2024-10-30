
export interface SidebarMenu {
 id: number;
 label: string; // corrected typo from "lable" to "label"
 icon: React.ElementType;
 path: string | null; // corrected union type syntax
}