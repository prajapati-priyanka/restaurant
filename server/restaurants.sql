--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.1

-- Started on 2021-06-26 01:21:17

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 16404)
-- Name: restaurant_tbl; Type: TABLE; Schema: public; Owner: my_user
--

CREATE TABLE public.restaurant_tbl (
    id integer NOT NULL,
    name character varying(100),
    img_url text,
    price integer,
    rating double precision,
    veg boolean,
    non_veg boolean,
    location character varying(100),
    cuisines character varying(100)
);


ALTER TABLE public.restaurant_tbl OWNER TO my_user;

--
-- TOC entry 200 (class 1259 OID 16402)
-- Name: res_details_id_seq; Type: SEQUENCE; Schema: public; Owner: my_user
--

CREATE SEQUENCE public.res_details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.res_details_id_seq OWNER TO my_user;

--
-- TOC entry 2991 (class 0 OID 0)
-- Dependencies: 200
-- Name: res_details_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: my_user
--

ALTER SEQUENCE public.res_details_id_seq OWNED BY public.restaurant_tbl.id;


--
-- TOC entry 2851 (class 2604 OID 16407)
-- Name: restaurant_tbl id; Type: DEFAULT; Schema: public; Owner: my_user
--

ALTER TABLE ONLY public.restaurant_tbl ALTER COLUMN id SET DEFAULT nextval('public.res_details_id_seq'::regclass);


--
-- TOC entry 2985 (class 0 OID 16404)
-- Dependencies: 201
-- Data for Name: restaurant_tbl; Type: TABLE DATA; Schema: public; Owner: my_user
--

COPY public.restaurant_tbl (id, name, img_url, price, rating, veg, non_veg, location, cuisines) FROM stdin;
1	Bhograj Fast Food	https://b.zmtcdn.com/data/pictures/4/19298864/28367525b0077f7a6a9130c9eb5611af_o2_featured_v2.jpg?output-format=webp	200	3.5	t	f	Indira nagar	Burger, South Indian
5	The Grill Avenue	https://b.zmtcdn.com/data/pictures/chains/7/18762237/b9457061a71ae1ed9d5c2956a303ef33_o2_featured_v2.jpg?output-format=webp	200	2.6	t	t	Ulubari	Biryani, North Indian
7	Deja Bowl	https://b.zmtcdn.com/data/pictures/0/19106360/f2c28a36ab88f48911486932f4ec2cb6_o2_featured_v2.jpg?output-format=webp	150	4.5	t	f	Athgaon	North Indian, Fast Food
8	Star Restaurant	https://b.zmtcdn.com/data/pictures/2/19071272/797eb21c49755bcc88674565b7716b6b_o2_featured_v2.jpg?output-format=webp	150	3.4	t	t	Paltan Bazaar	Chinese, Biryani, North Indian
9	Assam Kitchen	https://b.zmtcdn.com/data/pictures/2/19599102/6419e39bfa2ead40308227a8579860f1_o2_featured_v2.jpg	50	3.9	t	t	Indira Nagar	Chinese, Biryani, Fast food
11	Swastika	https://b.zmtcdn.com/data/pictures/9/18823689/3b463e6aead39df1eaaf1af0998e503b_o2_featured_v2.jpg	150	4.1	f	t	Machkuwa	Mughlai, North Indian
12	Chai Biscuit	https://b.zmtcdn.com/data/pictures/4/18930594/88cc84851c9f0dcebcd6bc7d619ba6e4_o2_featured_v2.jpg	250	2.2	t	f	Athgaon	Fast food, Tea, Chinese
13	7 Spices	https://b.zmtcdn.com/data/pictures/4/19399534/cfccc0ca7114fd5d998dbb24a5064295_o2_featured_v2.jpg	300	3.9	t	t	Rehabari	North Indian, Chinese
14	Chufang The Kitchen	https://b.zmtcdn.com/data/pictures/chains/0/19427410/f022e6ce77ab9b8439b5a0a571869178_o2_featured_v2.jpg	400	4.2	f	t	Ulubari	Mughlai, Assamese
15	Kolkata Biryani House	https://b.zmtcdn.com/data/pictures/7/19639867/01c361be49104bfce556f3360879c13a_o2_featured_v2.jpg	250	2.8	f	t	Zoo Road	Biryani
16	Mast Biryani	https://b.zmtcdn.com/data/pictures/chains/9/19271869/7cfd4101b001c04b839ac37d36508e36_o2_featured_v2.jpg	350	4.5	t	t	Maligaon	Biryani
17	Kavita's Kitchen	https://b.zmtcdn.com/data/pictures/6/19310436/0ea50c4c94aaeab82d943030ed8282e9_o2_featured_v2.jpg	400	4.1	t	t	Ulubari	North Indian
18	Bakes N Bites	https://b.zmtcdn.com/data/pictures/8/19704598/14a4b1a4a0340e3fa589b47ac040a93f_o2_featured_v2.jpg	50	3.4	t	f	Kumarpara	Bakery, Desserts
19	Rasoi	https://b.zmtcdn.com/data/pictures/chains/0/19344530/a1ac4553d1c674b60bbe34e66694b501_o2_featured_v2.jpg	200	2.6	t	f	Rehabari	North Indian, South Indian
20	The Indian Coffee House	https://b.zmtcdn.com/data/pictures/6/19595126/ec99a0f5c8ff9a8088c66efa5214befe_o2_featured_v2.jpg	150	4.2	t	f	Fanzy Bazar	South Indian
2	Food arena	https://b.zmtcdn.com/data/pictures/3/19654533/63c04c10c88e099b96348bf3db0ed3da_o2_featured_v2.jpg	400	3.9	t	t	Ganeshguri	Chinese, Fast food
3	The Cafe store	https://b.zmtcdn.com/data/pictures/2/2100832/edaae452c32463004e636b58884bfba4_o2_featured_v2.jpg	500	3.7	t	f	Rehabari	Coffee, Rolls, Pastry, Momos
4	Chick & Spicy	https://b.zmtcdn.com/data/res_imagery/2100936_RESTAURANT_02dbf5bc5ef320e1762707fa97e26388.jpg?fit=around%7C450%3A450&crop=450%3A450%3B0%2C0	200	3.5	t	t	Paltan Bazar	North Indian, Chinese
6	The Pork Company	https://b.zmtcdn.com/data/pictures/9/19168749/0600471a4064082795e0f59b55a004c8_o2_featured_v2.jpg?output-format=webp	300	4	f	t	Machkhowa	North Eastern, Assamese
10	Variety Dosa	https://b.zmtcdn.com/data/pictures/2/19658542/ba1d13d506801211a77a0357f382c620_o2_featured_v2.jpg	200	2.8	t	f	Jalukbari	South Indian, Fast food
\.


--
-- TOC entry 2992 (class 0 OID 0)
-- Dependencies: 200
-- Name: res_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: my_user
--

SELECT pg_catalog.setval('public.res_details_id_seq', 2, true);


--
-- TOC entry 2853 (class 2606 OID 16412)
-- Name: restaurant_tbl res_details_pkey; Type: CONSTRAINT; Schema: public; Owner: my_user
--

ALTER TABLE ONLY public.restaurant_tbl
    ADD CONSTRAINT res_details_pkey PRIMARY KEY (id);


-- Completed on 2021-06-26 01:21:23

--
-- PostgreSQL database dump complete
--

