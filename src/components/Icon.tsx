"use client";

import type { ComponentType } from "react";
import {
  AtSign,
  Bell,
  Bookmark,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  Clipboard,
  Clock,
  CreditCard,
  Expand,
  FileHeart,
  Globe,
  Headset,
  Heart,
  Image as ImageIcon,
  Images,
  Link2,
  LogOut,
  Maximize2,
  Menu,
  MessageCircle,
  Minimize2,
  MoreVertical,
  Moon,
  PanelsTopLeft,
  Paperclip,
  Pause,
  Play,
  Plus,
  Search,
  Settings,
  Send,
  Share2,
  ShieldPlus,
  Smartphone,
  Sun,
  UserPlus,
  Users,
  Volume2,
  X,
  type LucideProps,
} from "lucide-react";

export type IconName =
  | "user"
  | "menu"
  | "search"
  | "sun"
  | "moon"
  | "message"
  | "feed"
  | "explorar"
  | "short"
  | "notificacao"
  | "perfil"
  | "live"
  | "settings"
  | "logout"
  | "close"
  | "chevronDown"
  | "chevronLeft"
  | "chevronRight"
  | "check"
  | "heart"
  | "share"
  | "bookmark"
  | "more"
  | "camera"
  | "image"
  | "users"
  | "play"
  | "pause"
  | "volume"
  | "expand"
  | "maximize"
  | "minimize"
  | "plus"
  | "apps"
  | "clip"
  | "send"
  | "smileHearts"
  | "shield"
  | "creditCard"
  | "globe"
  | "time"
  | "following"
  | "cards"
  | "smartphone"
  | "headset"
  | "link"
  | "at"
  | "userPlus";

const iconMap: Record<IconName, ComponentType<LucideProps>> = {
  user: CircleUser,
  menu: Menu,
  search: Search,
  sun: Sun,
  moon: Moon,
  message: MessageCircle,
  feed: PanelsTopLeft,
  explorar: Globe,
  short: Play,
  notificacao: Bell,
  perfil: CircleUser,
  live: Camera,
  settings: Settings,
  logout: LogOut,
  close: X,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  check: Check,
  heart: Heart,
  share: Share2,
  bookmark: Bookmark,
  more: MoreVertical,
  camera: Camera,
  image: ImageIcon,
  users: Users,
  play: Play,
  pause: Pause,
  volume: Volume2,
  expand: Expand,
  maximize: Maximize2,
  minimize: Minimize2,
  plus: Plus,
  apps: Clipboard,
  clip: Paperclip,
  send: Send,
  smileHearts: FileHeart,
  shield: ShieldPlus,
  creditCard: CreditCard,
  globe: Globe,
  time: Clock,
  following: Users,
  cards: Images,
  smartphone: Smartphone,
  headset: Headset,
  link: Link2,
  at: AtSign,
  userPlus: UserPlus,
};

export function Icon({
  name,
  size = 20,
  className,
  ...props
}: { name: IconName; size?: number; className?: string } & Omit<
  LucideProps,
  "size"
>) {
  const Comp = iconMap[name];
  return <Comp size={size} className={className} {...props} />;
}
