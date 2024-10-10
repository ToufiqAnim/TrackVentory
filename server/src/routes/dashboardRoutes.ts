import { Router } from "express";
import { GetDashboardMetrics } from "../controllers/DashboardControllers";

const router = Router();

router.get("/", GetDashboardMetrics);

export default router;
