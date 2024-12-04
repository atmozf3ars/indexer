import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { SECTION_CONFIG, LANDING_PAGE_BG_IMAGE } from '../constants/fileExplorer'
import { FileInfo } from '../types/fileExplorer'
import { groupDirectories } from '../utils/fileExplorer'

interface RootDirectoryViewProps {
    files: FileInfo[]
    navigateToSubdirectory: (folderName: string) => void
}

export const RootDirectoryView: React.FC<RootDirectoryViewProps> = ({ files, navigateToSubdirectory }) => {
    const groups = groupDirectories(files)

    return (
        <motion.div className="space-y-8" variants={{
            animate: {
                transition: {
                    staggerChildren: 0.1
                }
            }
        }}>
            {Object.entries(groups).map(([groupName, groupFiles]) => (
                groupFiles.length > 0 && (
                    <motion.div
                        key={groupName}
                        className={`rounded-lg shadow-md p-6 ${SECTION_CONFIG[groupName].bgColor}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className={`text-2xl font-bold mb-4 ${SECTION_CONFIG[groupName].color}`}>{groupName}</h2>
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                            variants={{
                                animate: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                        >
                            {groupFiles.map((file) => {
                                const Icon = SECTION_CONFIG[groupName].icon
                                return (
                                    <motion.div
                                        key={file.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            onClick={() => navigateToSubdirectory(file.name)}
                                            className={`w-full h-40 p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden ${SECTION_CONFIG[groupName].color}`}
                                            variant="ghost"
                                        >
                                            <div
                                                className="absolute inset-0 bg-cover bg-center opacity-50"
                                                style={{ backgroundImage: `url(${LANDING_PAGE_BG_IMAGE})` }}
                                            />
                                            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                                                <Icon className="h-20 w-20 mb-2" aria-hidden="true" />
                                                <span className="text-lg font-bold text-center break-words w-full px-2">
                                                    {file.displayName || file.name}
                                                </span>
                                            </div>
                                        </Button>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </motion.div>
                )
            ))}
        </motion.div>
    )
}

