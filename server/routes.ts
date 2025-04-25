import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const parsedData = insertContactMessageSchema.safeParse(req.body);
      
      if (!parsedData.success) {
        return res.status(400).json({ 
          message: "Invalid input", 
          errors: parsedData.error.errors 
        });
      }
      
      // Add timestamp
      const messageData = {
        ...parsedData.data,
        createdAt: new Date().toISOString(),
      };
      
      const contactMessage = await storage.createContactMessage(messageData);
      
      return res.status(201).json({
        message: "Message sent successfully", 
        id: contactMessage.id
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", (_req, res) => {
    // In a real implementation, this would serve an actual PDF file
    // For demo purposes, we're sending a placeholder response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Ebuka_Ojiba_Resume.pdf');
    res.status(200).send("This would be a PDF file in a real implementation");
  });

  const httpServer = createServer(app);

  return httpServer;
}
