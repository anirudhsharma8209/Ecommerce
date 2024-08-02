--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

-- Started on 2024-08-03 01:28:44

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
-- TOC entry 218 (class 1259 OID 24621)
-- Name: brand; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brand (
    brandid uuid NOT NULL,
    brandname text,
    status boolean
);


ALTER TABLE public.brand OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 24640)
-- Name: cart; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart (
    cartid uuid NOT NULL,
    userid uuid,
    productid uuid,
    carttotal bigint
);


ALTER TABLE public.cart OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 24598)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    categoryid uuid NOT NULL,
    categoryname text,
    categorytotal bigint,
    status boolean,
    thumbnail text,
    brandid uuid
);


ALTER TABLE public.category OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 24645)
-- Name: order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."order" (
    orderid uuid NOT NULL,
    userid uuid,
    totalpayable bigint,
    orderstatus text,
    emailstatus boolean
);


ALTER TABLE public."order" OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 24652)
-- Name: orderlineitem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orderlineitem (
    lineitemid uuid NOT NULL,
    orderid uuid,
    productid uuid,
    quantity bigint,
    discount bigint,
    tax bigint,
    totalamount bigint
);


ALTER TABLE public.orderlineitem OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 24605)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    productid uuid NOT NULL,
    productname text,
    categoryid uuid,
    productprice bigint,
    productcode text,
    productimages text,
    thumbnail text,
    discount bigint,
    stock bigint,
    brandid uuid,
    status boolean
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 24590)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    userid uuid NOT NULL,
    username text,
    email text NOT NULL,
    password text NOT NULL,
    address text,
    status boolean,
    role text,
    backlist boolean DEFAULT false
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 4669 (class 2606 OID 24629)
-- Name: brand brand_brandname_brandname1_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brand
    ADD CONSTRAINT brand_brandname_brandname1_key UNIQUE (brandname) INCLUDE (brandname);


--
-- TOC entry 4671 (class 2606 OID 24627)
-- Name: brand brand_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brand
    ADD CONSTRAINT brand_pkey PRIMARY KEY (brandid);


--
-- TOC entry 4673 (class 2606 OID 24644)
-- Name: cart cart_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (cartid);


--
-- TOC entry 4661 (class 2606 OID 24604)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (categoryid);


--
-- TOC entry 4675 (class 2606 OID 24651)
-- Name: order order_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (orderid);


--
-- TOC entry 4677 (class 2606 OID 24656)
-- Name: orderlineitem orderlineitem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orderlineitem
    ADD CONSTRAINT orderlineitem_pkey PRIMARY KEY (lineitemid);


--
-- TOC entry 4665 (class 2606 OID 24611)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (productid);


--
-- TOC entry 4663 (class 2606 OID 24615)
-- Name: category uniquecategory; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT uniquecategory UNIQUE (categoryname) INCLUDE (categoryname);


--
-- TOC entry 4667 (class 2606 OID 24613)
-- Name: product uniqueproduct; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT uniqueproduct UNIQUE (productname) INCLUDE (productname);


--
-- TOC entry 4659 (class 2606 OID 24597)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (userid);


--
-- TOC entry 4678 (class 2606 OID 24616)
-- Name: product product_categoryid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_categoryid_fkey FOREIGN KEY (categoryid) REFERENCES public.category(categoryid) NOT VALID;


-- Completed on 2024-08-03 01:28:45

--
-- PostgreSQL database dump complete
--

